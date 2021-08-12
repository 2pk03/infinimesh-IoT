export const state = () => ({
  objects: [],
  kinds: ["device"]
})

export const mutations = {
  setObjects(state, value) {
    state.objects = value;
  },
  setKinds(state, value) {
    state.kinds = value;
  }
}

export const actions = {
  async get({ commit }) {
    if (window.nuxt) window.$nuxt.$loading.start();

    const { objects } = await this.$axios.$get("/api/objects");
    commit("setObjects", objects);

    if (window.$nuxt) window.$nuxt.$loading.finish();
  },
}

export const getters = {
  get: (state) => state.objects,
  getObjectById: (state) => (id) => state.objects.find(obj => obj.uid === id),
  getKinds: (state) => state.kinds
}
