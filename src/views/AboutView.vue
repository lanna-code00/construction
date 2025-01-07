<template>
  <div class="w-full pt-36">
    <About />
  </div>
</template>

<script setup>
import About from "../components/About/index.vue";
import { useHead } from "@vueuse/head";

// Using VueUse Head for SEO
useHead({
  title:
    "About Us | J.Martins Building Materials - Premium Construction Supplies (Steel, Rods, Galvanize, and More)",
  meta: [
    {
      name: "description",
      content:
        "Learn more about J.Martins Building Materials and our commitment to providing high-quality construction materials like steel rods, iron rods, and galvanize.",
    },
    {
      name: "keywords",
      content:
        "about us, J.Martins, building materials, construction supplies, steel rods, iron rods, galvanize, rods, binding wires, premium construction materials",
    },
    {
      name: "author",
      content: "J.Martins Building Materials",
    },
    {
      property: "og:title",
      content:
        "About Us | J.Martins Building Materials - Premium Construction Supplies",
    },
    {
      property: "og:description",
      content:
        "Discover more about J.Martins Building Materials, our mission, and the high-quality construction materials we provide.",
    },
    {
      property: "og:url",
      content: "/about-us", // Replace with the actual URL of the about page
    },
    {
      name: "twitter:title",
      content: "About Us | J.Martins Building Materials",
    },
    {
      name: "twitter:description",
      content:
        "Learn more about our building materials company and what we stand for.",
    },
  ],
});
</script>
