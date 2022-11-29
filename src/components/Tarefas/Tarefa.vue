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
            <tarefaMenu :tarefa="tarefa"/>
          <!-- <v-menu offset-y :close-on-content-click="true">
      <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click.stop="" v-bind="attrs"
          v-on="on">   
              <v-icon color="teal darken-2">mdi-dots-vertical</v-icon>
            </v-btn>

      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menuTarefa"
          :key="index"
        >
        
          <v-list-item-title @click.stop="HandleRemoveTarefa(tarefa)"><v-icon :color="item.color">{{item.icon}}</v-icon> <span class="red--text text--darken-1"> {{ item.title }}  </span></v-list-item-title> 
        </v-list-item>
      </v-list>
    </v-menu> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import Tarefa from "../../models/Tarefa";
import TarefaMenu from "./TarefaMenu.vue"

@Component({
  components: {
    TarefaMenu
  }
})
export default class Tarefaa extends Vue {
  @Prop() public tarefa!: Tarefa;
 
  //nada: Tarefa= new Tarefa();
  
  public HandleRemoveTarefa(tarefa:Tarefa)
  {
    this.$store.commit('RemoveTarefa',tarefa);
    console.log(tarefa)
  }
  // testeee(){
  //   console.log(this.nada);
  // }
}
</script>

<style>

</style>