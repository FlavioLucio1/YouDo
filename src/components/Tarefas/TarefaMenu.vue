<template>
<div>
   <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          icon
        >
        <v-icon color="teal darken-2">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in menuTarefa"
          :key="index"
          @click= "item.AoClicar()"                
        >   <!--"item.AoClicar()" -->
         <v-icon left :color="`${item.color} darken-1`">{{item.icon}} </v-icon>
          <v-list-item-title> <span :class="`${item.color}--text text--darken-1`"> {{ item.title }}  </span></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEditar v-if="menuTarefa.find(x => x.title == 'Editar').ativarDialog == true"  @fechaDialog="Fechar('Editar')" :tarefa="tarefa"/>   <!-- v-if="menuTarefa.find(x => x.title == 'Editar').ativarDialog == true"/>   -->
       <!-- <DialogEditar v-if="teste" :dialogo="teste"/>  parei aqui, melhorar isso -->
        <!-- <DialogEditar v-if="menuTarefa.find(x => x.title == 'Editar').ativarDialog == true"> -->
          <!-- {{menuTarefa.find(x => x.title == 'Editar').ativarDialog == true}} -->
    <DialogExcluir v-if="menuTarefa.find(x => x.title == 'Excluir').ativarDialog == true"  @fechaDialog="Fechar('Excluir')" :tarefa="tarefa"/> 
    </div>
</template>


<script lang="ts">
import Tarefa from "@/models/Tarefa";
import { Vue, Component,Prop } from "vue-property-decorator";
import DialogEditar from "../MenuDialogs/DialogEditar.vue";
import DialogExcluir from "../MenuDialogs/DialogExcluir.vue";

@Component({
  components: {
    DialogEditar,DialogExcluir
  }
})
export default class TarefaMenu extends Vue{
    @Prop() public tarefa!: Tarefa;
    public teste = false;
    public menuTarefa = [{title:"Excluir",icon:"mdi-trash-can",color:"red",ativarDialog:false,AoClicar(){this.ativarDialog=true}},
                       {title:"Editar",icon:"mdi-pencil",color:"green",ativarDialog:false,AoClicar(){console.log(this.ativarDialog=true)}}]

    Fechar(funcao : string)
    {
          //eslint-disable-next-line
         this.menuTarefa.find(x => x.title == funcao)!.ativarDialog = false; 
          console.log(this.tarefa.titulo);
    }
}
</script>

<style>

</style>