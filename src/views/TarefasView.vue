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

      <v-list-item-group
        multiple
      >
        <div
            v-for="tarefa, index in $store.state.tarefas"
            :key="index">     <!-- o $store.state serve para acessar os dados lá do vuex-->
           <Tarefa :tarefa="tarefa"/>              <!--index é só uma referencia da posição do vfor. é necessário para funcionar|  ele usa os : para conseguir passar o objeto,sem isso é como se ele estivesse passando uma string -->

        </div>
      </v-list-item-group>
    </v-list>
    <ListaTarefa />
    </div>
</template>

<script lang="ts">
  import ListaTarefa from '@/components/Tarefas/ListaTarefa.vue';
import Vue from 'vue'
  import Tarefa from '../components/Tarefas/Tarefa.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
        Tarefa,
        ListaTarefa,

    },
      data(){
        return{
          campoInput: null,
          tarefas: Array<Tarefa>()      
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
