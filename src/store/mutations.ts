/* eslint-disable */
import db from '../services/LocalBaseCore'
//no mutation podemos alterar um valor do state,criando funções para fazer isso. (obrigatório ter como parametro pelo menos o state que deseja alterar)
export default {
    GetTarefas(state: any)
    {
      // eslint-disable-next-line
      db.collection('tarefas').get().then((tarefas : any) => { state.tarefas = tarefas});
      console.log("entrou");
    },
    AddTarefa(state: any, titulo: any) {
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
    ExcluirTodasTarefas(state: any, tarefas: any)
    {
      db.collection('tarefas').delete();
    },

    ReadicionarTarefas(state: any,tarefa:any)
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
}