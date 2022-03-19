<template>
  <v-simple-table>
    <template v-slot:default>

      <tbody>
        <tr v-for="site of sitesLista" :key="site.id">
          
            <v-avatar size="150" >
              <img :src="site.imagem" :alt="site.nome"/>
            </v-avatar>
            <p class="pl-2">{{ site.nome }}</p>
          
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
