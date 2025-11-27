/*
Copyright © 2021-2022 Nikita Ivanovski info@slnt-opp.xyz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cmd

import (
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"net"
	"net/url"
	"strconv"
	"strings"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/insecure"

	pb "github.com/infinimesh/proto/node"
	accpb "github.com/infinimesh/proto/node/accounts"
)

func getVersion() string {
	return VERSION
}

// contextCmd represents the context command
var contextCmd = &cobra.Command{
	Use:     "context",
	Aliases: []string{"ctx"},
	Short:   "Print current infinimesh CLI Context | Aliases: ctx",
	RunE: func(cmd *cobra.Command, args []string) error {
		data := make(map[string]interface{})
		data["version"] = getVersion()

		data["host"] = viper.Get("infinimesh")
		if data["host"] == nil {
			data = map[string]interface{}{
				"error": "No infinimesh context found",
			}
		}

		if insec := viper.GetBool("insecure"); insec {
			data["insecure"] = insec
		}

		if printJson, _ := cmd.Flags().GetBool("json"); printJson {
			return printJsonResponse(data)
		}

		for k, v := range data {
			fmt.Printf("%s: %v\n", strings.Title(k), v)
		}

		return nil
	},
}

var loginCmd = &cobra.Command{
	Use:     "login",
	Aliases: []string{"l", "auth", "a"},
	Short:   "Authorize in infinimesh and store credentials",
	RunE: func(cmd *cobra.Command, args []string) error {
		host, _ := cmd.Flags().GetString("api")
		username, _ := cmd.Flags().GetString("username")
		password, _ := cmd.Flags().GetString("password")

		// backwards-compat: allow positional args (host user pass)
		if host == "" && len(args) > 0 {
			host = args[0]
		}
		if username == "" && len(args) > 1 {
			username = args[1]
		}
		if password == "" && len(args) > 2 {
			password = args[2]
		}
		if host == "" || username == "" || password == "" {
			return fmt.Errorf("login requires api, username and password; pass via flags or positionals")
		}

		resolvedHost, err := normalizeAPIHost(host)
		if err != nil {
			return err
		}

		creds := credentials.NewTLS(&tls.Config{InsecureSkipVerify: true})
		insec, _ := cmd.Flags().GetBool("insecure")
		if insec {
			creds = insecure.NewCredentials()
		}
		conn, err := grpc.Dial(resolvedHost, grpc.WithTransportCredentials(creds))
		if err != nil {
			return err
		}

		client := pb.NewAccountsServiceClient(conn)

		t := "standard"
		if ok, err := cmd.Flags().GetBool("ldap"); err != nil {
			return err
		} else if ok {
			t = "ldap"
		}

		req := &pb.TokenRequest{
			Auth: &accpb.Credentials{
				Type: t, Data: []string{username, password},
			},
		}

		res, err := client.Token(context.Background(), req)
		if err != nil {
			return err
		}
		token := res.GetToken()
		printToken, _ := cmd.Flags().GetBool("print-token")
		if printToken {
			fmt.Println(token)
		}

		viper.Set("infinimesh", resolvedHost)
		viper.Set("token", token)
		viper.Set("insecure", insec)

		err = viper.WriteConfig()
		return err
	},
}

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Print infinimesh CLI version",
	RunE: func(cmd *cobra.Command, args []string) error {
		if printJson, _ := cmd.Flags().GetBool("json"); printJson {
			data, err := json.Marshal(map[string]string{
				"version": getVersion(),
			})
			if err != nil {
				return err
			}
			fmt.Println(string(data))
			return nil
		}

		fmt.Println("CLI Version:", getVersion())
		return nil
	},
}

func init() {
	loginCmd.Flags().Bool("print-token", false, "")
	loginCmd.Flags().Bool("insecure", false, "Use WithInsecure instead of TLS")
	loginCmd.Flags().Bool("ldap", false, "Use Credentials Type LDAP")
	loginCmd.Flags().String("api", "", "API endpoint (host:port or URL)")
	loginCmd.Flags().String("username", "", "Username (defaults to positional arg if provided)")
	loginCmd.Flags().String("password", "", "Password (defaults to positional arg if provided)")

	rootCmd.AddCommand(contextCmd)
	rootCmd.AddCommand(loginCmd)
	rootCmd.AddCommand(versionCmd)
}

// normalizeAPIHost accepts host[:port] or URL and returns host:port,
// defaulting to port 8000 if none provided.
func normalizeAPIHost(host string) (string, error) {
	if host == "" {
		return "", fmt.Errorf("api host is empty")
	}
	if parsed, err := url.Parse(host); err == nil && parsed.Host != "" {
		host = parsed.Host
		// If port is explicitly set, keep it; otherwise fall through to default handling below.
		if parsed.Port() != "" {
			return strings.TrimSuffix(host, "/"), nil
		}
		if parsed.Scheme == "http" {
			return parsed.Host + ":8000", nil
		}
		if parsed.Scheme == "https" {
			return parsed.Host + ":8000", nil
		}
	}

	host = strings.TrimPrefix(host, "http://")
	host = strings.TrimPrefix(host, "https://")
	host = strings.TrimSuffix(host, "/")

	_, _, err := net.SplitHostPort(host)
	if err == nil {
		return host, nil
	}
	// if missing port, add default 8000
	if strings.Contains(host, ":") {
		// malformed host:port
		return "", fmt.Errorf("invalid api host: %s", err)
	}
	return host + ":" + strconv.Itoa(8000), nil
}
