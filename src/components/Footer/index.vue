<template>
  <div>
    <footer
      class="mt-20 xl:mt-32 mx-auto w-full relative text-center shadow-2xl bg-[#ffffff] text-black"
    >
      <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl">
          We dey always dey available to answer you<br />
          Our customers are our kings!.
        </h2>
        <a
          class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#FFEF00] rounded-full shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
          href="https://wa.me/2348106714056?text=Hello Martins,%20I%20wan%20to%20buy..."
          target="_blank"
          >Tell us your price and the quantity</a
        >
        <div class="mt-14 xl:mt-20">
          <nav class="flex flex-wrap justify-center text-lg font-medium">
            <RouterLink class="px-5 py-2" to="/about-us">About</RouterLink>
            <RouterLink class="px-5 py-2" to="/products">Products</RouterLink>
          </nav>
          <p class="mt-7 text-base">© {{ currentYear }} J.MARTINS</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
