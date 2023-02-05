<template>
  <div>
   <center><input-tarefa /></center> 
    <ListaTarefa />
    <div v-if="!$store.state.tarefas.length">
        <center>
        <v-icon size="100" color="teal darken-2" class="animate__animated animate__bounceInUp">
              mdi-check
          </v-icon>
          <div class="text-h5 teal--text text--darken-2 animate__animated animate__fadeInLeftBig">
            Nenhuma Tarefa
          </div>
        </center>
    </div>
  </div>
</template>

<script lang="ts">
  import InputTarefa from '@/components/InputTarefa.vue';
import ListaTarefa from '@/components/Tarefas/ListaTarefa.vue';
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    components: {
        ListaTarefa,
        InputTarefa,

    },     
      created(){
          this.$store.commit('GetTarefas');
      }
      
  })
</script>
