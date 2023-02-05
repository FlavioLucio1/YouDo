<template>
<v-list subheader flat>
    <v-col class="pt-10" cols="12" md="8" lg="7" xl="6">
        <v-text-field v-model="campoInput" label="Nova tarefa" outlined clearable
            @keyup.enter="handleAddTarefa"></v-text-field>
    </v-col>
</v-list>
</template>

<script>
export default {
    data() {
        return {
            campoInput: null
        }
    },
    methods: {
        handleAddTarefa() {
            this.$store.dispatch('AddTarefa', this.campoInput); //dispatch serve para ativar as actions do vuex
            // await this.$store.commit('AddTarefa',this.campoInput); forma que eu fiz nessa linha e na debaixo
            this.campoInput = null;
            //  await this.$store.commit('GetTarefas');
        }
    }
}
</script>

<style>

</style>