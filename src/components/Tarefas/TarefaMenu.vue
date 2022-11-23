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
          @click= "testando()"                
        >   <!--"item.AoClicar()" -->
         <v-icon left :color="`${item.color} darken-1`">{{item.icon}}</v-icon>
          <v-list-item-title> <span :class="`${item.color}--text text--darken-1`"> {{ item.title }}  </span></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <DialogEditar v-if="teste" :dialogo="teste"/>  <!--parei aqui, melhorar isso -->

    </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DialogEditar from "../MenuDialogs/DialogEditar.vue";

@Component({
  components: {
    DialogEditar
  }
})
export default class TarefaMenu extends Vue{
    public teste = false;
    public menuTarefa = [{title:"Excluir",icon:"mdi-trash-can",color:"red",ativarDialog:false,AoClicar(){this.ativarDialog=true}},
                       {title:"Editar",icon:"mdi-pencil",color:"green",AoClicar(){console.log("teste2")}}]

    testando()
    {
      this.teste = true;
    }
}
</script>

<style>

</style>