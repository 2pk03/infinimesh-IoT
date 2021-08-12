<template>
  <a-drawer
    title="Create New Object"
    :visible="active"
    :width="drawerSize"
    :headerStyle="{ fontSize: '4rem' }"
    @close="$emit('cancel')"
  >
    <a-form-model
      :model="object"
      :rules="rules"
      :label-col="{ xs: 24, sm: 6, md: 6, lg: 6 }"
      :wrapper-col="{ xs: 24, sm: 16, md: 18, lg: { span: 14, offset: 1 } }"
      ref="objectAddForm"
    >
      <a-form-model-item prop="name" label="Name">
        <a-input v-model="object.name" />
      </a-form-model-item>

      <a-form-model-item prop="kind" label="Kind">
        <a-select v-model="object.kind" placeholder="please select object kind">
          <a-select-option v-for="kind in kinds" :value="kind" :key="kind">{{
            kind
          }}</a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item prop="objects" label="Objects">
        <a-select
          placeholder="please select objects"
          mode="multiple"
          :value="object.objects.map(el => el.name)"
        >
          <a-select-option v-for="o in objects" :value="o.name" :key="o.uid">{{
            o.name
          }}</a-select-option>
        </a-select>
      </a-form-model-item>
    </a-form-model>

    <div :style="{}" class="object-form-actions">
      <a-button
        :style="{ marginRight: '8px' }"
        @click="setDefault"
        class="ant-btn-danger"
        >Reset</a-button
      >
      <a-button
        :style="{ marginRight: '8px' }"
        @click="$emit('cancel')"
        type="primary"
        >Cancel</a-button
      >
      <a-button
        type="success"
        @click="handleSubmit"
        >Submit</a-button
      >
    </div>
  </a-drawer>
</template>

<script>
import drawerSizeMixin from "@/mixins/drawer-size.js";
export default {
  mixins: [drawerSizeMixin],
  props: {
    active: {
      required: true,
    },
    defaultData: {
      reqired: false,
    },
  },
  data() {
    return {
      object: {
        name: "",
        kind: "",
        objects: [],
      },
      rules: {
        name: [
          { required: true, message: "Please, input the new Object name" },
          {
            min: 4,
            max: 24,
            message:
              "Object name should be at least 4 and not more than 24 characters long",
          },
          {
            pattern: /^[a-zA-Z0-9\-_]*$/,
            message:
              "Object name can contain only alphanumeric characters, hyphens and underscores",
          },
          {
            validator: (rule, val, raise) => {
              let count = (val.match(/[\-_]/g) || []).length;
              if (val.length - count == 0) {
                raise("f#ck");
              }
            },
            message: "Object name can't contain only hyphens and underscores",
          },
        ],
        kind: [{ required: true, message: "Please select a kind" }],
      },
      errors: [],
    };
  },
  mounted() {
    this.setDefault();
  },
  computed: {
    kinds() {
      return this.$store.getters["objects/getKinds"];
    },
    objects() {
      return this.$store.getters["objects/get"];
    },
  },
  methods: {
    setDefault() {
      this.object = { ...this.defaultData } || {
        name: "",
        kind: "",
        objects: [],
      };
    },
    handleSubmit() {
      let form = this.$refs["objectAddForm"];
      let errors = [];
      form.validateField(Object.keys(this.object), err => {
        if (err) {
          errors.push(err);
        }
      });
      if (errors.length === 0) this.$emit("add", this.object);
    }
  },
};
</script>

<style scoped>
.object-form-actions {
  background: var(--primary-color);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e9e9e9;
  padding: 10px 16px;
  text-align: right;
  z-index: 1;
}
</style>

