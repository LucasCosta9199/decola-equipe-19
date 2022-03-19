<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Sites confiáveis</h2>
    
  </v-container>
</template>

<script>


export default {
  name:'SitesConfiaveis',
  
  data(){
    return{
      sitesLista: []
    }
  },
  created() {
    fetch('https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json')
      .then(response => response.json())
      .then(json => {
        this.sitesLista = json;
      })
  }
  
}
</script>

<style scoped>

</style>