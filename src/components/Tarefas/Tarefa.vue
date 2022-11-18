<template>

         <v-list-item
         :class="{'teal lighten-5': tarefa.concluido}"
         @click="tarefa.concluido = !tarefa.concluido"
         >        <!-- ele coloca os : na classe e com isso é como se ele funcionasse como um if, onde ele só vai adicionar a classe se a condição for verdadeira -->
          <template v-slot:default="{ active}">
            <v-list-item-action>
              <v-checkbox
                v-model="tarefa.concluido"  
                :input-value="active"
                color="primary"
              ></v-checkbox>   <!-- ele passou o valor para o checkbox sem usar o v model(o vmodel serve para fazer uma entrada e saida de um valor em um atributo). ele usou para isso:  :input-value="tarefa.concluido" -->
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{'text-decoration-line-through': tarefa.concluido}">{{tarefa.titulo}}</v-list-item-title>
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