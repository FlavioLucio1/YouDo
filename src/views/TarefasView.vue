<template>
<div>

    <v-list
      subheader
      flat
    >

      <v-list-item-group
        v-model="settings"
        multiple
      >
        <Tarefa />
        <Tarefa />

      </v-list-item-group>
    </v-list>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tarefa from '../components/Tarefas/Tarefa.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
        Tarefa
    },
  })
</script>
