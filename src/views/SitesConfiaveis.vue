<template>
  <v-container>
    <h2 class="titulopagina text-center mb-3 mt-5">SITES CONFIÁVEIS</h2>
    <SitesTabela :sitesLista="sitesLista"/>
  </v-container>
</template>

<script>
import SitesTabela from '../components/SitesTabela';

export default {
  name:'SitesConfiaveis',
  components:{
    SitesTabela
  },
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
  .titulopagina{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #191970;
  }
</style>