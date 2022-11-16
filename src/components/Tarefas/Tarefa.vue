<template>

         <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

</template>

<script>
export default {

}
</script>

<style>

</style>