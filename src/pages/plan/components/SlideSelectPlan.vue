<template>
  <div class="tw-p-4 md:tw-px-12 md:tw-py-6">
    <div
      class="tw-grid tw-grid-flow-col tw-grid-cols-2 tw-gap-x-12 tw-content-end"
    >
      <div></div>
      <div class="tw-col-span-1">
        <v-select outlined dense></v-select>
      </div>
    </div>
    <div class="tw-mb-2">
      <span class="tw-font-bold tw-text-2xl">Planos</span>
    </div>
    <div>
      <div class="tw-grid tw-grid-flow-col tw-grid-cols-2 tw-gap-x-10">
        <item-plan></item-plan>
        <item-plan></item-plan>
      </div>
      <div class="tw-grid tw-grid-flow-col tw-grid-cols-2 tw-gap-x-10">
        <div class="tw-mt-4">
          <button
            class="tw-w-12 tw-h-12 tw-bg-red-300 tw-text-white tw-rounded-lg tw-mr-4"
          >
            <v-icon dark>mdi-chevron-left</v-icon>
          </button>
          <button
            class="tw-w-12 tw-h-12 tw-bg-red-600 tw-text-white tw-rounded-lg"
          >
            <v-icon dark>mdi-chevron-right</v-icon>
          </button>
        </div>
        <div class="tw-mt-4">
          <v-text-field
            label="Cupom"
            placeholder="Insira o cupom"
            outlined
            dense
          >
          </v-text-field>
        </div>
      </div>
      <div class="tw-mt-4 tw-flex tw-justify-center">
        <button
          class="tw-w-full md:tw-w-32 tw-py-2 tw-font-bold tw-text-white tw-bg-red-600 tw-rounded-full"
          @click="$emit('next')"
        >
          Avançar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemPlan from "./ItemPlan";
export default {
  name: "SlideSelectPlan",
  components: { ItemPlan }
};
</script>

<style scoped></style>
