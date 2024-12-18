<script setup>
import Navigation from "./components/Navigation/index.vue";
import Footer from "./components/Footer/index.vue"
</script>

<template>

  <div class="">
    <Navigation/>
  </div>
  <main>
    <RouterView/>
  </main>
<Footer/>
</template>

