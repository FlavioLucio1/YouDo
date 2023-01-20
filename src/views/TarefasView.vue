<template>
  <div>
     <v-list
      subheader
      flat
    >
            <v-col
          cols="12"
          sm="3"
        >
          <v-text-field
            v-model="campoInput"
            label="Nova tarefa"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
         </v-list>
    <ListaTarefa />
  </div>
</template>

<script lang="ts">
  import ListaTarefa from '@/components/Tarefas/ListaTarefa.vue';
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    components: {
        ListaTarefa,

    },
      data(){
        return{
          campoInput: null 
        }
      },
      created(){
          this.$store.commit('GetTarefas');
      },
      methods:{
        handleAddTarefa()
        {
          this.$store.dispatch('AddTarefa', this.campoInput); //dispatch serve para ativar as actions do vuex
        // await this.$store.commit('AddTarefa',this.campoInput); forma que eu fiz nessa linha e na debaixo
          this.campoInput = null;
       //  await this.$store.commit('GetTarefas');
        }
      }
  })
</script>
