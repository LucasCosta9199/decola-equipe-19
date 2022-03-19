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
        label="Site Recomendado"
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
        :rules="[(v) => !!v || 'Nos diga a função primrária deste site']"
        label="Assunto do site"
        required
      ></v-select>

      
        <v-dialog
        v-model="dialog"
        width="500" :disabled="!valid" color="success" class="mr-4" @click="validate">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="light green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Enviar
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h6 grey lighten-2">
          Obrigado por sua contribução.
        </v-card-title>

        <v-card-text>
          Seus dados fora enviados para análise de um moderador! 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      (v) => !!v || "Digite o link do site",
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
    dialog: false
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