<template>
    <div class="colaboradores">

        <h2 class="text-center text-h5 text-left mb-9 mt-5">Colaboradores do projeto</h2>
        <v-simple-table>
        <template v-slot:default>
            <tbody>
            <tr>
                <td>
                    <v-avatar size="60" mb-50 mt-5>
                        <img src="https://avatars.githubusercontent.com/u/48037781?v=4" alt=""/>
                    </v-avatar>
                </td>
                <td>
                    <p>Anabel Cristina</p>
                    <p>
                        <a href="https://avatars.githubusercontent.com/u/48037781?v=4">GitHub</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/anabelcristina/">LinkedIn</a>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <v-avatar size="60" mb-50 mt-5>
                        <img src="https://avatars.githubusercontent.com/u/88735409?v=4" alt=""/>
                    </v-avatar>
                </td>
                <td>
                    <p>Lucas Costa</p>
                    <p>
                        <a href="https://github.com/LucasCosta9199">GitHub</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/lucascosta9199/">LinkedIn</a>
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
</style>