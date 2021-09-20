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

    <v-card class="mx-auto bg--white pt-0" max-width="570" >
      <v-list class="py-0">
        <div class="fondo" >
          <v-list-item-group v-model="selected" multiple>
            <template v-for="({pokemon}=pokemon,i) in favoritos">
              <v-list-item :key="i" class=" my-2 white text-left">
                  <v-list-item-content class="">
                    <v-list-item-title
                     @click="getPokeInfo(pokemon)"
                      v-text="pokemon.name"
                    ></v-list-item-title>
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

              </v-list-item>
            </template>
          </v-list-item-group>
        
        </div>
      </v-list>
    </v-card> 
<!-- dialog -->

 <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card class="mx-auto" max-width="506">
          <v-img
            class="white--text align-center "
            height="200px"
            src="@/assets/bg_paisaje.png"
          >
            <v-img
              :src="pokemonInfo.sprites.other.dream_world.front_default"
              contain
              height="150px"
            ></v-img>
          </v-img>
          <v-card-text class="pt-5">
            <div>
              <h4 class="secondary--text py-2">Name: {{ pokemonInfo.name }}</h4>
            </div>
            <v-divider></v-divider>
            <div>
              <h4 class="secondary--text py-2">
                Weight: {{ pokemonInfo.weight }}
              </h4>
            </div>
            <v-divider></v-divider>

            <div>
              <h4 class="secondary--text py-2">
                Height: {{ pokemonInfo.height }}
              </h4>
            </div>
            <v-divider></v-divider>

            <div>
              <h4 class="secondary--text py-2">
                Types:
                <div
                  v-for="(tipos, i) in pokemonInfo.types"
                  :key="i"
                  class="d-inline-flex justify-start"
                >
                  <p>{{ tipos.type.name }},</p>
                </div>
              </h4>
            </div>
            <v-divider></v-divider>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn color="error" rounded class="mb-3">
              Share with my friends
            </v-btn>

            <p></p>
            <div class="fav pl-1 pt-1">
              <v-icon
                color="#ECA539"
                large
                @click="delFav(pokeDatos, i)"
                v-if="pokeDatos.favorito"
              >
                mdi-star
              </v-icon>
              <v-icon color="#BFBFBF" large @click="addFav(pokeDatos, i)" v-else
                >mdi-star</v-icon
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>



  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
    footer : true,
      selected: Boolean,
      dialog:false,
      option: false,
      pokeDatos: {},

    };
  },
  computed: {
    ...mapState(["pokeList","allFav","favoritos","pokemonInfo"]),
    ...mapGetters(['allFav','pokemonsFiltradosPorNombre','pokemonInfo']),
    filtradosPorNombre(){
       return this.pokemonsFiltradosPorNombre(this.pokemonName);
    }
  },
  onCreated() {
    this.getPokemonInfo('bulbasaur');

  },
  methods: {
      ...mapActions(['addFavorite','removeFavorite','getPokemonInfo']),
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
    getPokeInfo(pokemon) {
      this.pokeDatos = pokemon;
      this.dialog = true;
      this.getPokemonInfo(pokemon.name);
    },
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
