<template>
  <v-container fluid>
    <div class="tw-container tw-max-w-3xl tw-mx-auto">
      <div class="tw-flex tw-mt-8 tw-mb-4">
        <div class="tw-flex tw-items-center">
          Planos
          <v-icon>mdi-chevron-right</v-icon>
        </div>
        <div class="tw-flex tw-items-center">
          Cadastros
          <v-icon>mdi-chevron-right</v-icon>
        </div>
        <div class="tw-flex tw-items-center">
          Número Claro flex
          <v-icon>mdi-chevron-right</v-icon>
        </div>
        <div class="tw-flex tw-items-center">
          Migração
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
      <div class="tw-w-full tw-border tw-bg-white tw-rounded-md">
        <v-window v-model="step">
          <v-window-item value="selectPlan">
            <slide-select-plan @next="next"></slide-select-plan>
          </v-window-item>
          <v-window-item value="registerClient">
            <slide-register-client></slide-register-client>
          </v-window-item>
          <v-window-item value="deliveryAndPortability">
            <slide-delivery-and-portability></slide-delivery-and-portability>
          </v-window-item>
          <v-window-item value="migration">
            <slide-migration-instructions></slide-migration-instructions>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SlideSelectPlan from "./components/SlideSelectPlan";
import SlideRegisterClient from "./components/SlideRegisterClient";
import SlideDeliveryAndPortability from "./components/SlideDeliveryAndPortability";
import SlideMigrationInstructions from "./components/SlideMigrationInstructions";
export default {
  name: "PlanIndex",
  components: {
    SlideMigrationInstructions,
    SlideDeliveryAndPortability,
    SlideRegisterClient,
    SlideSelectPlan
  },
  data: () => ({
    step: "selectPlan"
  }),
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
    }),
    next() {
      this.step = "registerClient";
    }
  },
  created() {
    this.getPlans();
  }
};
</script>

<style scoped></style>
