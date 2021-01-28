<template>
  <div class="tw-min-h-full tw-bg-gray-100 ">
    <div class="tw-bg-red-700 tw-text-white">
      <div
        class="tw-container tw-max-w-3xl tw-mx-auto tw-px-4 lg:tw-px-0 tw-mx-auto tw-flex tw-items-center tw-justify-between"
      >
        <div class="tw-flex tw-items-center tw-font-bold">
          <div>
            SIM Delivery | Portabilidade
          </div>
          <div>
            <ul class="tw-flex">
              <li class="tw-px-4 tw-py-2">Migração</li>
              <li class="tw-px-4 tw-py-2">Reativação</li>
              <li class="tw-px-4 tw-py-2">Status</li>
            </ul>
          </div>
        </div>
        <div class="tw-flex-end">
          <v-btn icon color="white">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="tw-bg-red-600 tw-text-white">
      <div
        class="tw-container tw-max-w-3xl tw-mx-auto tw-grid tw-grid-flow-col tw-grid-cols-2 tw-gap-x-12 tw-content-end tw-py-4"
      >
        <div class="">
          Claro-flex
        </div>
        <div class="tw-flex tw-items-center tw-text-gray-800">
          <div
            class="tw-flex tw-items-center tw-bg-white tw-rounded-full tw-relative focus-within:tw-shadow-lg tw-w-full"
          >
            <label
              class="tw-absolute tw-text-xs tw-bg-white tw-top-0 tw-left-0 tw-ml-4 tw-px-1 tw-text-gray-400 tw-font-bold"
              style="transform: translateY(-50%)"
            >
              Dúvidas frequentes
            </label>
            <input class="tw-flex-1 tw-px-4 tw-py-2 focus:tw-outline-none" />
            <div class="tw-px-2">
              <v-icon light>mdi-magnify</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style scoped></style>
