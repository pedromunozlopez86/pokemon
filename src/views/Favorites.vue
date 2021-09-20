<template class="error">
  <v-container class="text-center" id="contenedor">
    <v-text-field
      label="Search"
      single-line
      prepend-inner-icon="mdi-magnify"
      class="text-center"
      elevation-1
      id="search-input"
    ></v-text-field>
    <v-btn @click="test">favoritos</v-btn>

    <v-card class="mx-auto bg--white pt-0" max-width="570" >
      <v-list class="py-0">
        <div class="fondo" >
          <v-list-item-group v-model="selected" multiple>
            <template v-for="({pokemon}=pokemon,i) in favoritos">
              <v-list-item :key="i" class=" my-2 white text-left">
                <!-- <template v-slot:default="{  }"> -->
                  <v-list-item-content class="">
                    <v-list-item-title
                      v-text="pokemon.name"
                    ></v-list-item-title>
                    {{pokemon}}
                  </v-list-item-content>
                  <v-list-item-action class="pl-4">
                    <div class="fav pl-1 pt-1">
                      <v-icon v-if="pokemon.favorito" color="#ECA539" large @click="remove(pokemon,i)">
                        mdi-star
                      </v-icon>
                      <v-icon v-else color="#BFBFBF" large @click="add(pokemon,i)">
                        mdi-star</v-icon>
                    </div>
                  </v-list-item-action>
                <!-- </template> -->
              </v-list-item>
            </template>
          </v-list-item-group>
        
        </div>
        
      </v-list>

    </v-card> 




  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      selected: Boolean,
      option: false,
    };
  },
  computed: {
    ...mapState(["pokeList","allFav","favoritos"]),
    ...mapGetters(['allFav','pokemonsFiltradosPorNombre']),
    filtradosPorNombre(){
       return this.pokemonsFiltradosPorNombre(this.pokemonName);
    }
  },
  onCreated() {
    // this.$store.dispatch("getPokemonList");
  },
  methods: {
      ...mapActions(['addFavorite','removeFavorite']),
      ...mapMutations(['ADD_FAVORITE','REMOVE_FAVORITE']),
    add(pokemon){
        // this.addFavorite(pokemon);
        console.log(this.favoritos)
    },
    remove(pokemon,i){
        this.removeFavorite(i)
        pokemon.favorito=false;
        console.log(this.favoritos)

    },
    test(){
        console.log('allFav: '+this.$store.allFav)
        console.log('option: '+this.option)
        console.log( this.favoritos)


    }
  }
};
</script>

<style scoped>
#contenedor {
  width: 50vw;
}
#lista {
  background-color: red;
}

#search-input {
  width: 570px !important;
}

.fav {
  width: 44px;
    height: 44px;
border-radius: 30px;
/* right: 10px;
top: calc(50% - 44px/2); */

background: #F5F5F5;
  
}
</style>
