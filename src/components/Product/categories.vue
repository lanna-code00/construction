<template>
  <div>
    <!-- Dropdown for mobile view -->
    <div class="lg:hidden flex">
      <select
        name=""
        id=""
        @change="handleProducts($event)"
        class="w-full mx-9 py-2 px-4 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFEF00] focus:border-[#FFEF00] text-gray-700 appearance-none bg-white"
      >
        <option
          value="all"
          class="py-2 px-4 hover:bg-[#FFEF00] hover:text-white focus:bg-[#FFEF00] focus:text-white"
        >
          All
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
          class="py-2 px-4 hover:bg-[#FFEF00] hover:text-white focus:bg-[#FFEF00] focus:text-white"
        >
          {{ category.category }}
        </option>
      </select>
    </div>

    <!-- Grid for larger screens -->
    <div class="lg:px-[38px] hidden lg:grid">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 px-7 gap-3">
        <!-- 'All' Button -->
        <ul
          :class="{
            'bg-[#FFEF00] text-black': activeCategory === 'all',
            'hover:border-[#FFEF00] hover:bg-[#FFEF00] group':
              activeCategory !== 'all',
          }"
          class="border-black group flex-1 -skew-x-[40deg] transform border-2 transition-all duration-300 ease-in-out cursor-pointer"
          @click="setActiveCategory('all')"
        >
          <li
            class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase"
          >
            <b class="block text-sm group-hover:text-black">All</b>
          </li>
        </ul>

        <!-- Categories -->
        <ul
          v-for="category in categories"
          :key="category.id"
          :class="{
            'bg-[#FFEF00] text-black': activeCategory === category.id,
            'hover:border-[#FFEF00] hover:bg-[#FFEF00] group':
              activeCategory !== category.id,
          }"
          class="border-black group flex-1 -skew-x-[40deg] transform border-2 transition-all duration-300 ease-in-out cursor-pointer"
          @click="setActiveCategory(category.id)"
        >
          <li
            class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase"
          >
            <b class="block group-hover:text-black text-sm">{{
              category.category
            }}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeCategory: "all", // Tracks the currently active category
    };
  },
  methods: {
    handleProducts(event) {
      const event_value = event.target.value;
      this.setActiveCategory(event_value);
    },
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
      if (categoryId === "all") {
        this.allProducts();
      } else {
        this.filterProducts(categoryId);
      }
    },
    allProducts() {
      this.$emit("all-products");
    },
    filterProducts(categoryId) {
      this.$emit("filter-products", categoryId);
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
