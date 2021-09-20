<template>
  <v-app>
    <v-main class="fondo">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app class="d-flex justify-center align-center">
      <router-link to="/list">
      <button class="my-2 mr-2" id="btn-footer" >
        <img src="@/assets/list.svg" width="22px" class="mr-4" /> All
      </button>
      </router-link>
      <router-link to="/favoritos"> 
      <button class="my-2 ml-2" id="btn-footer" >
        <img src="@/assets/favorite.svg" width="22px" class="mr-4" /> Favorites
      </button>
      </router-link>
    </v-footer>
  </v-app>
</template>

<style>
.fondo {
  background-color: #e5e5e5;
}

#btn-footer {
  background: #f22539;
  border-radius: 60px;
  color: white;
  height: 44px;
  width: 275px;
}

#btn-footer:focus {
  background-color: #c00e20;
}
</style>
<script>
import {mapState,mapGetters} from "vuex"
export default {
  name: "App",

  data: () => ({
    estadoFavoritos: Boolean,
  }),

  computed:{
    ...mapState(['allFav']),
    ...mapGetters(['allFav']),
    

  },

  created() {
    this.$store.dispatch("getPokemonList");

  },
  methods:{


  },

};
</script>
