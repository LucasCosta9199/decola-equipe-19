<template>
  <v-simple-table>
    <template v-slot:default>

      <tbody>
        <tr class="linha-tabela" v-for="site of sitesLista" :key="site.id">

            <img class="center home-image mb-4 mr-4 ml-4"  :src="site.imagem" :alt="site.nome"/>
            <p class="pl-2 text-center">{{ site.nome.toUpperCase() }}</p>
            <p>{{ site.descricao }}</p>

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
