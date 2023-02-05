<template>
  <v-card-text class="pt-10">
          <div class="font-weight-bold ml-8 mb-2">
            Quadro de Atualizações 
            <v-icon class="pl-1">mdi-bullhorn</v-icon>
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.data }}</strong>
                </div>
                <div>{{ message.texto }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
</template>

<script>
  export default {
    data: () => ({
      messages: [

        {
          id: 4,
          data: '04/02/2023',
          texto: `Ajustes na caixa de entrada da tarefa,criado mensagem e animação ao não ter tarefas`,
          color: 'green',
        },
        {
          id: 3,
          data: '30/01/2023',
          texto: `Foto no fundo do menu, centralização dos textos e espaço para futuro avatar do usuário`,
          color: 'deep-purple lighten-1',
        },
        {
          id: 2,
          data: '30/01/2023',
          texto: 'Criado área para exibir as atualizações do aplicativo!',
          color: 'green',
        },
        {
          id: 1,
          data: '01/12/2022',
          texto: 'Teste se o PWA estava atualizado',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
  }
</script>
