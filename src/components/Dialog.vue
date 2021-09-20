<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card class="mx-auto" max-width="506">
        <v-img
          class="white--text align-center "
          height="200px"
          src="@/assets/bg_paisaje.png"
        >
          <v-img src="@/assets/Squirtle.png" height="150px" contain></v-img>
        </v-img>

        <v-card-text class="pt-5">
          <div><h4 class="secondary--text py-2">Name:</h4></div>
          <v-divider></v-divider>
          <div><h4 class="secondary--text py-2">Weight:</h4></div>
          <v-divider></v-divider>

          <div><h4 class="secondary--text py-2">Height:</h4></div>
          <v-divider></v-divider>

          <div><h4 class="secondary--text py-2">Types:</h4></div>
          <v-divider></v-divider>
        </v-card-text>

        <v-card-actions>
          <v-btn color="error" rounded>
            Share with my friends
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    data(){
        return{
            namePokemon: 'bulbasaur',
        }
    },
    computed:{
        ...mapState(['pokemonInfo'])
    },
    methods: {
        ...mapActions(['getPokemonInfo']),
        getInfo(){
            this.getPokemonInfo(this.namePokemon)
        }
    },
}
</script>