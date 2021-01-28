<template>
  <div class="tw-p-4 md:tw-px-12 md:tw-py-10">
    <div class="tw-mb-4">
      <span class="tw-font-bold tw-text-2xl">Cadastro do cliente</span>
    </div>
    <div class="tw-mb-8">
      <span>Preencha os dados de identiicação</span>
    </div>
    <div class="tw-w-full md:tw-w-1/2">
      <v-text-field label="CPF" dense outlined> </v-text-field>
    </div>
    <div class="tw-grid tw-grid-cols-6 tw-gap-x-3">
      <div class="tw-col-span-full">
        <v-text-field label="Nome" dense outlined> </v-text-field>
      </div>
      <div class="tw-col-span-3">
        <v-text-field label="CPF" dense outlined> </v-text-field>
      </div>
      <div class="tw-col-span-3">
        <v-text-field label="Telefone" dense outlined> </v-text-field>
      </div>
      <div class="tw-col-span-2">
        <v-text-field label="CEP" dense outlined> </v-text-field>
      </div>
      <div class="tw-col-span-4">
        <v-text-field label="Endereço" dense outlined> </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideRegisterClient"
};
</script>

<style scoped></style>
