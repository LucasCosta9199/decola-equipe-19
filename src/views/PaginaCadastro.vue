<template>
  <v-container>
    <h3 class="text-h5 text-center mb-3 mt-5">
      Gostaria de se cadastrar como site verificador de Fake News?
    </h3>
    <h4 class="subtitulo">Deixe seu contato abaixo:</h4>
    <v-form ref="form" v-model="valid" lazy-validatio>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Nos diga o que você faz']"
        label="O que você faz?"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Cadastrar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Limpar campos </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Digite se nome",
      (v) => (v && v.length <= 10) || "O nome deve ter menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || " Digite seu E-mail",
      (v) => /.+@.+\..+/.test(v) || "O E-mail deve ser válido",
    ],
    select: null,
    items: [
      "Checagem de fatos",
      "Pesquisa de Notícias",
      "Canal de denúncias",
      "Checagem de fatos, fotos, videos e textos",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
</style>