<template>
  <div>
    <ObjectCard
      :data="object"
      :withActions="true"
      :withObjects="true"
      @edit="handleEdit"
      @delete="handleDelete"
    />

    <ObjectForm
      v-if="addObjectActive"
      :active="addObjectActive"
      :defaultData="defaultObjectData"
      @cancel="addObjectActive = false"
      @add="handleAdd"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      addObjectActive: false,
      defaultObjectData: null,
    };
  },
  computed: {
    object() {
      return this.$store.getters["objects/getObjectById"](
        this.$route.params.id
      );
    },
  },
  methods: {
    handleAdd(data) {
      this.addObjectActive = false
      console.log('data =========================', data)
    },
    handleEdit(data) {
      this.addObjectActive = true;
      this.defaultObjectData = data;
    },
    async handleDelete({ id }) {
      const self = this;
      self.$confirm({
        title: "Confirm",
        content: "Are you sure you want to delete this Object ?",
        okText: "Delete",
        cancelText: "Cancel",
        async onOk() {
          await self
            .$axios({
              method: "delete",
              url: `/api/objects/${id}`,
            })
            .catch((e) => {
              self.$notification.error({
                message: "Failed to delete object",
                description: e.response.data.message,
              });
            });

          self.$notification.success({
            message: "Object deleted successfuly.",
          });

          self.$router.push({
            name: "dashboard-objects",
          });
        },
      });
    },
  },
};
</script>

<style>
</style>
