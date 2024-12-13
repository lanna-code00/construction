<template>
    <div class="w-full pt-36 lg:pt-0">
       <Hero/>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import Hero from "./Hero.vue";
  import { EffectFade, Autoplay } from "swiper/modules";
  
  export default {
    components: {
      Swiper,
      Hero,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Autoplay],
      };
    },
  };
  </script>
  
  <style scoped>
/* Ensure swiper and images are fully responsive */
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  /* Adjust text size and container widths for mobile */
  .text-5xl {
    font-size: 2rem; /* Adjust for mobile */
  }
  .text-2xl {
    font-size: 1rem; /* Adjust for mobile */
  }
  .leading-9 {
    line-height: 1.5rem; /* Adjust line-height for smaller screens */
  }
}
</style>