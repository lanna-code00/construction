<template>
  <div>
    <swiper
      :effect="'fade'"
      :autoplay="{ delay: 5000 }"
      :modules="modules"
      class="mySwiper w-full"
    >
      <swiper-slide class="relative">
        <img src="/files/rod_6.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            Strong <span class="text-[#FFEF00]">Iron</span> Wey Go Make Your
            Work Stand Gidigba
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            We get correct steel rods, electrodes, and iron designs wey go make
            your construction strong like rock
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/rod_7.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            Quality <span class="text-[#FFEF00]">Iron</span>, No Shaking!
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            Our iron no dey fail. From rods to electrodes and designs,
            everything we sell na better quality wey you fit trust
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/rods_2.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            Make your project
            <span class="text-[#FFEF00]">Strong kakaraka</span>, with better
            steel
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            No matter di kind building wey you dey do, our steel rods and iron
            go give you strength wey no fit bend.
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/rod_9.jpg" class="w-full h-auto object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            <span class="text-[#FFEF00]">Iron</span> Products wey fit any kind
            work
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            Weda na big project or small work o, we get all di iron materials
            wey you need, custom-made just for you.
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/rods_3.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            Better <span class="text-[#FFEF00]"> Price,</span> Better
            <span class="text-[#FFEF00]"> Quality iron</span>
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            We no go tear your pocket. Our iron dey affordable, but e no mean
            say we no dey give correct quality.
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/steel_pipe3.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            We <span class="text-[#FFEF00]"> Sabi Iron,</span>We
            <span class="text-[#FFEF00]"> sell iron </span>
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            No need waka far. If na steel rods, designs, or electrodes you need,
            we get am ready for you
          </p>
        </div>
      </swiper-slide>

      <swiper-slide class="relative">
        <img src="/files/steel_pipe.jpg" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="absolute inset-0 flex flex-col items-center w-2/3 justify-center mx-auto"
        >
          <h2 class="text-white text-5xl font-bold mb-6 leading-[1.3em]">
            We know say you wan <span class="text-[#FFEF00]"> buy 😉</span>,
            Hala us today!
          </h2>
          <p class="text-white text-2xl leading-9 italic">
            No dull yourself! Make we supply you di best iron for your project.
            Contact us today make we run am
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
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
