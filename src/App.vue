<script setup>
import { ref, onMounted } from "vue";
import Navigation from "./components/Navigation/index.vue";
import Footer from "./components/Footer/index.vue";

const loading = ref(true); // State to control the loader

onMounted(() => {
  // Wait until the page has fully loaded
  window.addEventListener("load", () => {
    loading.value = false; // Set loading to false when the page is ready
  });
});
</script>

<template>
  <!-- Global Loader -->
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
    <h1 class="text-4xl font-bold text-black fade-text">J.MARTINS</h1>
  </div>

  <!-- Main App Content -->
  <div v-else>
    <Navigation />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Loader animation */
.fade-text {
  animation: fade 1.5s ease-in-out infinite;
  /* Infinite fade-in and fade-out animation */
}

@keyframes fade {

  0%,
  100% {
    opacity: 0;
    /* Fully transparent at start and end */
  }

  50% {
    opacity: 1;
    /* Fully visible at 50% of the animation */
  }
}

/* Prevent scrolling while loading */
</style>
