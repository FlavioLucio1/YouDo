/* eslint-disable */
//está usando localbase https://www.npmjs.com/package/localbase
import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

const db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
     // { id:1, titulo: "teste1", concluido: false },
      // { id: 2, titulo: "TESTANDO", concluido: true },
      // { id: 3, titulo: "ir no mercado", concluido: false },
      // { id: 4, titulo: "teste4", concluido: false },
      // { id: 5, titulo: "teste4", concluido: true }
    ],
  }, //no state podemos criar valores que podem ser acessados globalmente no nosso projeto
  getters: {
  },
  mutations: {
    GetTarefas(state)
    {
      // eslint-disable-next-line
      db.collection('tarefas').get().then((tarefas : any) => { state.tarefas = tarefas});
      console.log("entrou");
    },
    AddTarefa(state,titulo) {
      if (titulo) {
        db.collection('tarefas').add({
          id: new Date().getTime(),
          titulo: titulo,
          concluido: false
        })


      //   método antigo, antes do localbase
      //   state.tarefas.push({ 
      //     id: new Date().getTime(),
      //     titulo, 
      //     concluido: false })
      //
      }
    },
    ExcluirTodasTarefas(state,tarefas)
    {
      db.collection('tarefas').delete();
    },

    ReadicionarTarefas(state,tarefa)
    {
      if (tarefa) {
        db.collection('tarefas').add({
          id: tarefa.id,
          titulo: tarefa.titulo,
          concluido: tarefa.concluido
        })
      }
    }
    // RemoveTarefa(state,tarefaId)   //se quiser fazer sem passar o objeto tarefa é só passar o id e usar a função que o professor usou comentada abaixo
    // {
    //  // state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
    //   if(tarefaId)
    //   {
    //     //const tarefaParaExcluir = state.tarefas.filter(x => x.id == tarefa.id)[0];
    //    // const index = state.tarefas.indexOf(tarefa);
    //    // if(tarefaParaExcluir)
    //    // {
    //       //console.log("caiu remove2");
    //      // state.tarefas.splice(index,1);
    //     //}  
    //     //abaixo a forma antiga que tirava somente da lisca local
    //     //state.tarefas = state.tarefas.filter(x => x.id !== tarefa.id);
    //     const id = tarefaId;
    //     db.collection('tarefas').doc({ id: id }).delete();
    //   }
    // }
    //  EditaTarefa(state,novaTarefa)
    // {
    //   if(novaTarefa)
    //   {
    //     db.collection('tarefas').doc({ id: novaTarefa.id }).update({
    //       titulo: novaTarefa.titulo
    //     })
    //    // const tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0];
    //    // tarefa.titulo = novaTarefa.titulo;
    //   }
    // }
  },    //no mutation podemos alterar um valor do state,criando funções para fazer isso. (obrigatório ter como parametro pelo menos o state que deseja alterar)
  actions: {
    async AddTarefa({commit},titulo)
    {
      await commit('AddTarefa',titulo);
      await commit('GetTarefas');
    },
    async RemoveTarefa({ commit },tarefaId) {
      db.collection('tarefas').doc({ id: tarefaId }).delete().then(() =>{ commit('GetTarefas')});
      //await commit('RemoveTarefa', tarefaId);
     // await commit('GetTarefas');
    },
    async EditaTarefa({commit},novaTarefa)
    {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo,concluido: novaTarefa.concluido

      }).then(() =>{ commit('GetTarefas')});
    },
    async ReordenarTarefas({commit},tarefas)
    {
      db.collection('tarefas').delete().then(() =>{ 
          tarefas.forEach((tarefa:any) => {
             commit('ReadicionarTarefas',tarefa);
          }).finally(()=>{commit('GetTarefas')});
           });
    }
  },
 
  modules: {
  }
})
