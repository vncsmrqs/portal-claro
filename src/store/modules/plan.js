import planService from "@/services/plan";

export const types = {
  SET_PLANS: "SET_PLANS",
  GET_PLANS_START: "GET_PLANS_START",
  GET_PLANS_ERROR: "GET_PLANS_ERROR",
  GET_PLANS_SUCCESS: "GET_PLANS_SUCCESS"
};

const state = {
  list: {
    data: [],
    loading: false,
    error: null
  }
};

const getters = {
  plans: state => state.list.data,
  isLoadingList: state => state.list.loading,
  loadingListError: state => state.list.error
};

const mutations = {
  [types.SET_PLANS](state, payload) {
    state.list.data = payload;
  },
  [types.GET_PLANS_START](state) {
    state.list.loading = true;
    state.list.error = null;
  },
  [types.GET_PLANS_SUCCESS](state) {
    state.list.loading = false;
    state.list.error = null;
  },
  [types.GET_PLANS_ERROR](state, error) {
    state.list.loading = false;
    state.list.error = error;
  }
};

const actions = {
  getPlans({ commit }) {
    console.log("AAAA");
    commit(types.GET_PLANS_START);

    return planService
      .getAll()
      .then(plans => {
        commit(types.GET_PLANS_SUCCESS, plans);
      })
      .catch(error => {
        commit(types.GET_PLANS_ERROR, error);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
