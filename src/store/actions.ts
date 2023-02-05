/* eslint-disable */
import { Commit } from 'vuex';
import db from '../services/LocalBaseCore'

export default {
    async AddTarefa({ commit}: { commit: Commit }, titulo: any) {
        await commit('AddTarefa', titulo);
        await commit('GetTarefas');
    },
    async RemoveTarefa({ commit}: { commit: Commit } , tarefaId: any) {
        db.collection('tarefas').doc({ id: tarefaId }).delete().then(() => { commit('GetTarefas') });
    },
    async EditaTarefa({ commit}: { commit: Commit }, novaTarefa: any) {
        db.collection('tarefas').doc({ id: novaTarefa.id }).update({
            titulo: novaTarefa.titulo, concluido: novaTarefa.concluido
        }).then(() => { commit('GetTarefas') });
    },
    async ReordenarTarefas({ commit}: { commit: Commit }, tarefas: any) {
        db.collection('tarefas').delete().then(() => {
            tarefas.forEach((tarefa : any) => {
                commit('ReadicionarTarefas', tarefa);
            }).finally(() => { commit('GetTarefas') });
        });
    }
}
