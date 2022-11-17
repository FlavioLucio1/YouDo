<template>

         <v-list-item>
          <template v-slot:default="{ active}">
            <v-list-item-action>
              <v-checkbox
                v-model="tarefa.concluido"
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{tarefa.titulo}}</v-list-item-title>
            </v-list-item-content>

          </template>
        </v-list-item>

</template>

<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import Tarefa from "../../models/Tarefa";

@Component
export default class Tarefaa extends Vue {
  @Prop() private tarefa!: Tarefa;

  //nada: Tarefa= new Tarefa();
  
  // testeee(){
  //   console.log(this.nada);
  // }
}
</script>

<style>

</style>