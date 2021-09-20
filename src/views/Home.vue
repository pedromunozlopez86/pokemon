<template>
  <v-container class="text-center">
    <div class="d-flex justify-center pt-16 mt-16">
    <v-img src="@/assets/pikachu_anima.gif" max-width="325px"></v-img>
    </div>
    <v-spacer></v-spacer>
    <h1 class="my-10">Welcome to Pokédex</h1>
    <h2 class="px-16 mx-16">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</h2>

    <router-link to="/list">
    <button class="mt-16" id="btn-main">Get started </button>
    </router-link>
  </v-container>
</template>

<style scoped>
#btn-main{
  background: #F22539;
  border-radius: 60px;
  color: white;
  height: 44px;
  width: 131px;
}

#btn-main:focus{
  background-color: #C00E20;
}

</style>

<script>
  export default {
    name: 'Home',


  }
</script>
