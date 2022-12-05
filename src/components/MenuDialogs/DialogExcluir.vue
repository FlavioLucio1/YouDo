<template>
<div>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h5">
          Excluir
        </v-card-title>
        
        <v-card-text>Deseja excluir a tarefa?</v-card-text>
       
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="teal darken-2"
            text
            @click="$emit('fechaDialog')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="$store.dispatch('RemoveTarefa',tarefa.id), $emit('fechaDialog')" 
          >   
          <!-- {id: tarefa.id,titulo:novoTitulo,concluido:tarefa.concluido} -->
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>


<script lang="ts">

import { Vue, Component,Prop } from "vue-property-decorator";
import Tarefa from "../../models/Tarefa";

@Component
  export default class dialogoExcluirTarefa extends Vue {
    @Prop() public tarefa!: Tarefa;

    dialog = true;
    novoTitulo = "";
    tarefaEditada = new Tarefa();
    created(){
      this.novoTitulo = this.tarefa.titulo;
    }
   // EditarTarefa()
  }
</script>

<style>

</style>