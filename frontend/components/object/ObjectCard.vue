<template>
  <a-card
    :hoverable="true"
    :bordered="false"
    :ref="`object-card-${data.uid}`"
    :class="selected ? 'card-selected' : ''"
    @click.left.exact="
      $router.push({
        name: 'dashboard-objects-id',
        params: { id: data.uid },
      })
    "
  >
    <template slot="title">{{ data.name }}</template>

    <template slot="extra">
      <b>{{ data.uid }}</b>
    </template>

    <template>
      <span> <b>kind:</b> {{ data.kind }}</span>
    </template>

    <template v-if="withObjects && data.objects && data.objects.length">
      <span class="object-card-details"><b>Objects:</b></span>
      <a-row :gutter="[16, 16]" type="flex" align="top">
        <a-col
          :xs="24"
          :sm="12"
          :md="8"
          v-for="co in data.objects"
          :key="co.uid"
        >
          <ul class="object-card-objects">
            <li><b>Id:</b> {{ co.uid }}</li>
            <li><b>Name:</b> {{ co.name }}</li>
            <li><b>Kind:</b> {{ co.kind }}</li>
          </ul>
        </a-col>
      </a-row>
    </template>

    <template slot="actions" v-if="withActions">
      <a-icon
        key="delete"
        type="delete"
        @click="$emit('delete', { id: data.uid })"
      />
      <a-icon key="edit" type="edit" @click="$emit('edit', data)" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
  </a-card>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
    },
    withObjects: {
      required: false,
      default: false,
      type: Boolean,
    },
    withActions: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style>
.object-card-objects {
  background: var(--secondary-color);
  color: var(--primary-color);
  border-radius: var(--border-radius-base);
  padding: 8px;
  margin: 0;
  list-style: none;
}
.object-card-details {
  display: block;
  margin: 8px 0;
}
.object-card-actions {
  background: var(--primary-color);
}
</style>
