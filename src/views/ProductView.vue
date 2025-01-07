<template>
  <div class="w-full pt-36 h-full">
    <Product />
  </div>
</template>

<script setup>
import Product from "../components/Product/index.vue";
import { useHead } from "@vueuse/head";

// Using VueUse Head for SEO
useHead({
  title:
    "Product | J.Martins Building Materials - Premium Steel, Iron Rod, Galvanize, and More",
  meta: [
    {
      name: "description",
      content:
        "Explore high-quality building materials including steel rods, iron rods, galvanize, and more for your construction needs at J.Martins Building Materials.",
    },
    {
      name: "keywords",
      content:
        "building materials, steel rods, iron rods, galvanize, construction materials, 12mm rod, 16mm rod, J.Martins building supplies",
    },
    {
      name: "author",
      content: "J.Martins Building Materials",
    },
    {
      property: "og:title",
      content:
        "Product | J.Martins Building Materials - Premium Steel, Iron Rod, Galvanize, and More",
    },
    {
      property: "og:description",
      content:
        "Explore a wide selection of quality construction materials like steel rods, iron rods, and galvanize at J.Martins Building Materials.",
    },
    {
      name: "twitter:title",
      content: "Product | J.Martins Building Materials",
    },
    {
      name: "twitter:description",
      content:
        "Browse premium building materials at J.Martins Building Materials for your next project.",
    },
  ],
});
</script>
