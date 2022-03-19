<template>
  <div class="home">
    <h2 class="tituloHome text-h6 text-center mb-3 mt-5">AÇÃO CONTRA AS FAKE NEWS</h2>
    <v-img
      class="home-image mb-4 mt-4 mr-5 ml-5" alt="real ou feiki" src="https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/49825c86590cb82a99b9881362515e2eee43423949f93fd94643b2da00dcc6ac_1.jpg">
    </v-img>

    <p class='mb-4 mr-4 ml-4 text-justify'>
      Tendo em vista o atual cenário onde a tecnologia se tornou uma
      potencial ameaça, nos deparamos diariamante com as famigeradas Fake News.
      A proposta desse site é mitigar o dano causado por elas, trazendo fontes
      confiáveis para se informar. Abaixo pode-se conferir as últimas notícias virais
      e sua veracidade.
    </p>

  <v-divider class = "mr-4 ml-4"></v-divider>

    <h2 class="tituloHome text-h6 text-center mb-3 mt-5">Últimas notícias</h2>
    
    <p class="text-center"> "Vacina contra COVID-19 contém chip" </p>
    <v-img
      class="home-image mb-3 mr-5 ml-5" alt="real ou feiki" src="https://t2.tudocdn.net/548257?w=646&h=284">
    </v-img>
    <h3 class ="mentira text-center mb-3">FALSO</h3>

    <p class="mt-12 text-center"> "Mulher trai marido com morador de rua" </p>
    <v-img
      class="home-image mb-2 mr-5 ml-5" alt="real ou feiki" src="https://dol.com.br/img/Artigo-Destaque/700000/PERSONAL_00702693_0_.jpg?xid=1742469">
    </v-img>
    <h3 class ="verdade text-center mb-3 mt-1">VERDADEIRO</h3>


  </div>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>

<style scoped>

  .tituloHome{
    font-family: 'Courier';
  }
  .verdade{
    color: green;
  }
  .mentira{
    color: red;
  }
  


</style>
