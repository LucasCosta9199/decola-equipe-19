<template>
  <div class="colaboradores">
    <h2 class="titulopagina text-center mb-9 mt-5">COLABORADORES DO PROJETO</h2>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td>
              <v-avatar size="60" mb-50 mt-5>
                <img
                  src="https://avatars.githubusercontent.com/u/48037781?v=4"
                  alt=""
                />
              </v-avatar>
            </td>
            <td>
              <p class="nome">Anabel Cristina</p>
              <p>
                <a href="https://github.com/AnabelCristina">GitHub</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/anabelcristina/"
                  >LinkedIn</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <v-avatar size="60" mb-50 mt-5>
                <img
                  src="https://avatars.githubusercontent.com/u/88735409?v=4"
                  alt=""
                />
              </v-avatar>
            </td>
            <td>
              <p class="nome">Lucas Costa</p>
              <p>
                <a href="https://github.com/LucasCosta9199">GitHub</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/lucascosta9199/"
                  >LinkedIn</a
                >
              </p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nome {
  font-weight: bold;
  font-size: 17px;
}
.titulopagina {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #191970;
}
</style>