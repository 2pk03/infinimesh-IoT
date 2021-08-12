<template>
  <div id="objects">
    <a-row :gutter="[16, 16]" type="flex" align="top">
      <a-col :xs="24" :sm="12" :md="8">
        <div class="object-add">
          <a-icon
            type="plus"
            class="object-add-btn"
            @click="addObjectActive = true"
          />
        </div>
        <ObjectForm
          v-if="addObjectActive"
          :active="addObjectActive"
          @cancel="addObjectActive = false"
          @add="addObjectActive = false"
        />
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" v-for="o in objects" :key="o.uid">
        <ObjectCard :data="o" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "objectsPage",

  data() {
    return {
      addObjectActive: false,
    };
  },
  mounted() {
    this.$store.dispatch("objects/get");
  },
  computed: {
    objects() {
      return this.$store.getters["objects/get"];
    },
  },
};
</script>

<style scoped>
.object-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-base);
  background: var(--primary-color)-dark;
  border: var(--border-base);
  min-height: 8rem;
  cursor: pointer;
}
.object-add-btn {
  font-size: 6rem;
  color: var(--icon-color-dark);
}
</style>
