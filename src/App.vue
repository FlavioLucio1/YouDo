<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Kalled To-Do
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <v-divider></v-divider>
      
      <v-list dense nav>
        <v-list-item v-for="item in opcoesMenu" :key="item.title" :to="item.linkPath" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
      
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
      <!--      <div id="teste"> oi </div> -->

    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      opcoesMenu: [
        { title: 'Tarefas', icon: 'mdi-checkbox-marked-outline',linkPath:'/' },
        { title: 'Sobre', icon: 'mdi-help-box',linkPath: '/sobre' },
      ],
       drawer: null 
      
      }),
  }
</script>

<style>
  #teste {
    background-color: red;
    width:30px;
    height:30px;
    border-radius:100px;
  }
</style>

