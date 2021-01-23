<template>
  <div>AAAAAAA</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PlanIndex",
  computed: {
    ...mapGetters("plan", {
      plans: "plans",
      isLoading: "isLoadingList",
      error: "loadingListError"
    })
  },
  methods: {
    ...mapActions("plan", {
      getPlans: "getPlans"
    })
  },
  created() {
    this.getPlans();
  }
};
</script>

<style scoped></style>
