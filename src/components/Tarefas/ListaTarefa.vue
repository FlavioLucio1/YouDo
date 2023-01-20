<template>

    <drop-list :items="tarefasComputadas" @reorder="$event.apply(tarefasComputadas),teste(tarefasComputadas)" >

        <template v-slot:item="{item, reorder}">
            <drag :key="item.id" :data="item">

                <Tarefa 
                style="background-color: white"
                :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                :tarefa="item"
                />

                <v-divider/>
            </drag>
        </template>

    </drop-list>
</template>

<script>
/*eslint-disable */
import {Drag,Drop,DropList} from "vue-easy-dnd";
import Tarefa from './Tarefa.vue'
    export default {
        name: "App",
        components: {
            Drag,
            DropList,
            Drop,
            Tarefa
        },
         
        computed:{
            tarefasComputadas(){
                return this.$store.state.tarefas
            },
            teste2(tarefas) {
                console.log(tarefas);
                //$store.dispatch('ReordenarTarefas',{id: tarefa.id,titulo:novoTitulo,concluido:tarefa.concluido})
            }
        },
        methods: {
                teste(testando) {
                    this.$store.dispatch('ReordenarTarefas',testando);
                }
        }
}
//$store.dispatch('EditaTarefa',{id: tarefa.id,titulo:novoTitulo,concluido:tarefa.concluido})
</script>

<style>

</style>