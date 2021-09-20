import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokeList: [],
    favoritos: [],
    allFav: true,
    pokemonInfo: {},
    name: "",
  },
  mutations: {
    GET_POKELIST(state, pokeList) {
      state.pokeList = pokeList;
    },

    GET_POKEMON_INFO(state, pokemonInfo) {
      state.pokemonInfo = pokemonInfo;
    },

    ADD_FAVORITE(state, { pokemon, i }) {
      const { favoritos } = this.state;
      const { pokeList } = this.state;
      const pokemonYaExiste = favoritos.findIndex((p) => p.i === i);
      if (pokemonYaExiste !== -1) {
        favoritos[pokemonYaExiste].pokemon.favorite = true;
      } else {
        favoritos.push({ i, pokemon });
        pokeList[pokemonYaExiste].pokemon.favorite = true;
      }
    },
    REMOVE_FAVORITE(state, i) {
      state.favoritos.splice(i, 1);
    },
  },

  actions: {
    getPokemonList({ commit }) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.data.results)
        .then((pokeList) => {
          pokeList.forEach((pokemon) => {
            if (pokemon.favorito == true) {
              pokemon.favorito = true;
            } else {
              pokemon.favorito = false;
            }
          });
          commit("GET_POKELIST", pokeList);
        });
    },
    getPokemonInfo({ commit }, name) {
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.data)
        .then((pokemonInfo) => {
          console.log(pokemonInfo);
          commit("GET_POKEMON_INFO", pokemonInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addFavorite({ commit }, nuevoFavorito) {
      console.log(nuevoFavorito);
      commit("ADD_FAVORITE", nuevoFavorito);
    },
    removeFavorite({ commit, state }, i) {
      // console.log(state);
      commit("REMOVE_FAVORITE", i);
    },
  },
  getters: {
    pokeList: (state) => {
      return state.pokeList;
    },
    pokemonInfo: (state) => {
      return state.pokemonInfo;
    },
    favoritos: (state) => {
      return state.favoritos;
    },
    allFav: (state) => {
      return state.allFav;
    },
    pokemonsFiltradosPorNombre: (state) => (pokemonName) => {
      return state.pokeList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
      );
    },
  },

  plugins: [createPersistedState()],
});
