<template>
<div>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        
        <v-card-text>Edite a sua tarefa</v-card-text>
        <v-col
          cols="12"

        >
          <v-text-field
            label="Tarefa"
            outlined
          ></v-text-field> <!--ele adicionou aqui o atributo class= "px-3" para fazer um efeito similar ao cols="12"-->
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="teal darken-2"
            text
            @click="dialog = false"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
  export default {
    props: ['dialogo'],
    data () {
      return {
        dialog: this.dialogo,
      }
    },
  }
</script>

<style>

</style>