<template>
<div>

    <v-list
      subheader
      flat
    >
            <v-col
          cols="12"
          sm="6"
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
            v-for="tarefa, index in tarefas"
            :key="index">
           <Tarefa :tarefa="tarefa"/>              <!--index é só uma referencia da posição do vfor. é necessário para funcionar|  ele usa os : para conseguir passar o objeto,sem isso é como se ele estivesse passando uma string -->

        </div>
      </v-list-item-group>
    </v-list>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tarefa from '../components/Tarefas/Tarefa.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
        Tarefa
    },
      data(){
        return{
          campoInput: null,
          tarefas: [
            {titulo:"teste1", concluido:false},
            {titulo:"TESTANDO", concluido:true},
            {titulo:"ir no mercado", concluido:false},
            {titulo:"teste4", concluido:false},
            {titulo:"teste4", concluido:true}
            ],
          
        }
      },
      methods:{
        handleAddTarefa()
        {
          if(this.campoInput)
          {
            this.tarefas.push({titulo:this.campoInput, concluido:false})
            this.campoInput = null;
          }
        }
      }
  })
</script>
