<script setup>
import Home from "../components/Home/index.vue";
import { useHead } from "@vueuse/head";

useHead({
  title:
    "Home | J.Martins Building Materials (steels, iron rod, galvanize, binding wires, rods, 12mm rod, 16mm rod, 8mm rod, 12mm TMT )",
  meta: [
    {
      name: "description",
      content:
        "We sell different kinds of building materials, like rods, pipes, steel pipes, plates, rivet, keys (small and big keys), galvanize nets.",
    },
    {
      name: "keywords",
      content:
        "mild steels, iron rings, cement, electrodes, iron rods, furniture pipes, plates, rivet, designed plates, binding wires, galvanize",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
});
</script>

<template>
  <div>
    <Home />
  </div>
</template>
