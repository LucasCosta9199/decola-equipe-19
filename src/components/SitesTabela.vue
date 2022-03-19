<template>
  <v-simple-table>
    <template v-slot:default>

      <tbody>
        <tr class="linha-tabela" v-for="site of sitesLista" :key="site.id">
            <div>
                <img class="center home-image mb-4 mr-4 ml-4"  :src="site.imagem" :alt="site.nome"/>
            </div>
            <h4 class="nomesite text-center">{{ site.nome.toUpperCase() }}</h4>
            <p class="text-justify ml-2 mr-2" >{{ site.descricao }}</p>

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
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: purple;
    font-weight: 600;
}
</style>
