<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <router-view />
    </v-main>
    <RodaPe/>
  </v-app>
</template>

<script>
import AppTopBar from "./components/AppTopBar.vue";
import RodaPe from "./components/RodaPe.vue";

export default {
  name: "App",

  components: {
    AppTopBar,
    RodaPe,
  },
};
</script>

<style scoped>
</style>