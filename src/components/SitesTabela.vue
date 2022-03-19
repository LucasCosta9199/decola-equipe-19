<template>
  <v-simple-table>
    <template v-slot:default>

      <tbody>
        <tr class="linha-tabela" v-for="site of sitesLista" :key="site.id">
            <div>
                <img class="mb-4 ml-4"  :src="site.imagem" :alt="site.nome"/>
            </div>
            <h3 class="nomesite text-h5 mb-1 text-center">{{ site.nome }}</h3>
            <p class="text-justify">{{ site.descricao }}</p>

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
