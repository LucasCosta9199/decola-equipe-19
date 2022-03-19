<template>
  <v-container>
    <h2 class="titulopagina text-center mb-3 mt-5">
      CADASTRO DE SITES CONFIÁVEIS
    </h2>
    <p class="text-justify">É possível você contribuir com o nosso projeto cadastrando
      um site que tenha o propósito de combate as fakes news. Após a análise
      da nossa moderação, o site aparece na nossa aba "Sites Confiáveis".
    </p>
    <h4 class="subtitulo mt-10">Cadastre aqui:</h4>
    <v-form ref="form" v-model="valid" lazy-validatio>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Site Recomendado"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="nameRules"
        label="Descrição"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Nos diga a função primária deste site']"
        label="Assunto do site"
        required
      ></v-select>

      <v-dialog
        v-model="dialog"
        width="500"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="light green"
            dark
            v-bind="attrs"
            v-on="on"
            @click="reset"
            class="mr-10"
          >
            Enviar
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h6 grey lighten-2">
            Obrigado por sua contribução.
          </v-card-title>

          <v-card-text>
            Seus dados foram enviados para análise de um moderador!
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> OK! </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn color="error" class="ml-14" @click="reset"> Limpar campos </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Digite o link do site"],
    descricaoRules:[(v) => !!v || "Digite algo"],
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
      "Aba de sugestões",
      "Canal de denúncias"
    ],
    checkbox: false,
    dialog: false,
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
  .titulopagina{
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      color: #191970;
    }
</style>