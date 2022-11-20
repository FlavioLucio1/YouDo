<template>
  <div>
    <v-list-item
    :class="{'teal lighten-5': tarefa.concluido}"
    @click="tarefa.concluido = !tarefa.concluido"
    >        <!-- ele coloca os : na classe e com isso é como se ele funcionasse como um if, onde ele só vai adicionar a classe se a condição for verdadeira -->
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox
              :input-value="tarefa.concluido"  
              color="primary"
            ></v-checkbox>   <!-- ele passou o valor para o checkbox sem usar o v model(o vmodel serve para fazer uma entrada e saida de um valor em um atributo). ele usou para isso:  :input-value="tarefa.concluido" -->
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="{'text-decoration-line-through': tarefa.concluido}">{{tarefa.titulo}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="HandleRemoveTarefa(tarefa)">
              <v-icon color="red lighten-1">mdi-trash-can</v-icon>
            </v-btn>
          </v-list-item-action>
          
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import Tarefa from "../../models/Tarefa";

@Component
export default class Tarefaa extends Vue {
  @Prop() public tarefa!: Tarefa;

  //nada: Tarefa= new Tarefa();
  
  HandleRemoveTarefa(tarefa:Tarefa)
  {
    this.$store.commit('RemoveTarefa',tarefa)
  }
  // testeee(){
  //   console.log(this.nada);
  // }
}
</script>

<style>

</style>