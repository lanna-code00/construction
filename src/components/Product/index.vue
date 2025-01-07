<template>
  <div class="">
    <categories
      :categories="categoriesJson"
      @all-products="fetchAllProducts"
      @filter-products="filterProducts"
    />
    <products :products="filteredProducts" />
  </div>
</template>

<script setup>
import Categories from "./categories.vue";
import Products from "./products.vue";
import categoriesJson from "../../../categories.json";
import { onMounted, ref } from "vue";

const products = ref([]);
const filteredProducts = ref([]);

onMounted(async () => {
  const response = await fetch("/products.json");
  const allProducts = await response.json();
  products.value = allProducts;
  filteredProducts.value = allProducts;
});

const fetchAllProducts = () => {
  filteredProducts.value = products.value;
};

const filterProducts = (id) => {
  filteredProducts.value = products.value.filter(
    ({ category_id }) => category_id == id
  );
};
</script>
