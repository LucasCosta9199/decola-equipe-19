<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Sites</th>
          <th class="text-right">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(site, index) of sitesLista" :key="site.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="24">
              <img :src="site.imagem" :alt="site.nome"/>
            </v-avatar>
            <span class="pl-2">{{ site.nome }}</span>
          </td>
          <td class="text-right">{{ site.descricao }}</td>
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
