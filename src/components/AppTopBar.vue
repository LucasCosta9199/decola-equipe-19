<template>
  <div class="app-top-bar">
    <v-app-bar color="#001a69" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-0">Menu</v-toolbar-title>
      <v-menu left bottom> </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red darken-3--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sitesconfiaveis">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-web-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sites de Verificação</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/paginacadastro">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-note-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro de Sites</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",

  data: () => ({
    darkMode: false,
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}

.v-list-item-group .v-list-item--active {
  color: white;
}
</style>