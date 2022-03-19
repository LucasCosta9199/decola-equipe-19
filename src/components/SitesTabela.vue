<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr class="linha-tabela" v-for="site of sitesLista" :key="site.id">
            <div>
                <img class="center home-image mt-4 mb-4 mr-4 ml-4"  :src="site.imagem" :alt="site.nome"/>
            </div>
            <div class="texto">
                <h3 class="mb-5 nomesite text-center">{{ site.nome.toUpperCase() }}</h3>
                <p class="text-justify  ml-2 mr-2" >{{ site.descricao }}</p>
            </div>
            <v-divider class = "mr-4 ml-4"></v-divider>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'SitesTabela',
  props: {
    sitesLista: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.linha-tabela img {
  width: 200px;
    
}
div {
    text-align: center;
}
.nomesite{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    color: purple;
    font-weight: 600;
}

.texto{
    background-color: whitesmoke;
}
</style>
