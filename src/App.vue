<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            YouDo
          </v-list-item-title>
          <v-list-item-subtitle>
           <p class="font-italic"> Você se planeja... você faz! </p>
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



    <v-app-bar  color="#00838F" dark shrink-on-scroll prominent src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll scroll-threshold="500" app>

          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(0, 151, 167, .7), rgba(25,32,72,.7)"></v-img>
          </template>
        
           <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
        
          <v-app-bar-title class="text-no-wrap">
            Tarefas           
              <v-icon color="00838F" small>
                mdi-checkbox-multiple-marked-outline
              </v-icon>
          </v-app-bar-title>

        
               
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

  .v-app-bar-title__content{
  width: 200px !important;
}
</style>

