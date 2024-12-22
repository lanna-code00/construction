<template>
    <div class="pt-20">
        <div class="text-center mb-16">
            <p class="lg:text-5xl text-xl font-black mb-4 text-[#27e08f]">Featured Products</p>
            <p class="tracking-wider font-bold uppercase">Check out our premium quality iron rods designed to strengthen your projects and make them stand the test of time. </p>
        </div>
        <swiper
        :modules="modules"
        :space-between="20"
        :breakpoints="{
            640: {
                slidesPerView: 1, 
            },
            768: {
                slidesPerView: 2.5
            },
            1024: {
                slidesPerView: 3.9 
            },
            1280: {
                slidesPerView: 4 
            }
        }"
        navigation
        class="mySwiper"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="relative rounded-lg overflow-hidden shadow-2xl group"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-48 object-cover"
          />
          <!-- Overlay appears only on hover -->
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div
              class="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <h2 class="text-lg font-bold leading-tight">
                {{ image.title }}
              </h2>
              <p class="text-[#27e08f]">₦ {{image.price}}</p>
            </div>
            <div
              class="absolute inset-0 flex justify-center items-center cursor-pointer"
            >
              <AkEyeOpen  @click="openModal(image.src)" class="fas fa-eye text-white text-3xl"/>
            </div>
        </swiper-slide>
      </swiper>


          <!-- Modal to display large image -->
    <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    @click="closeModal"
  >
    <div class="relative max-w-4xl mx-auto">
      <img :src="modalImage" class="w-full h-auto rounded-lg shadow-lg" />
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-white text-3xl"
      >
        &times;
      </button>
    </div>
  </div>
   
    </div>
  </template>
  
  <script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/navigation";
    import { Navigation } from "swiper/modules";
    import { AkEyeOpen } from '@kalimahapps/vue-icons';
    import { ref } from "vue";

    export default {
      components: {
        Swiper,
        AkEyeOpen,
        SwiperSlide,
      },
      setup() {
        const images = [
          { src: "/files/rod_6.jpg", alt: "Rod 6", title: "Rod, 8mm", price: "10,000" },
          { src: "/files/rod_7.jpg", alt: "Rod 7", title: "Rod, 12mm", price: "12,300" },
          { src: "/files/rods_2.jpg", alt: "Rods 2", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/rod_9.jpg", alt: "Rod 9", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/rod_8.jpg", alt: "Rod 10", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/rods_1.jpg", alt: "Rod 11", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/rods_3.jpg", alt: "Rod 12", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/rods_4.jpg", alt: "Rod 13", title: "Rod, 10mm", price: "12,300" },
          { src: "/files/steel_pipe3.jpg", alt: "Rod 14", title: "Pipe, 10mm", price: "12,300" },
          { src: "/files/steel_pipe.jpg", alt: "Rod 15", title: "Pipe, 12mm", price: "12,300" },
        ];

        const showModal = ref(false);
        const modalImage = ref("");

        // Function to open modal
        const openModal = (imageSrc) => {
        modalImage.value = imageSrc;
        showModal.value = true;
        };

        // Function to close modal
        const closeModal = () => {
        showModal.value = false;
        modalImage.value = "";
        };

        return {
        images,
        modules: [Navigation],
        showModal,
        modalImage,
        openModal,
        closeModal,
        };
  
      },
    };
  </script>
  
  <style scoped>
/* Hover effect */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

.swiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Eye icon in the center of each image */
.fas.fa-eye {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.group:hover .fas.fa-eye {
  opacity: 1;
}

/* Navigation button styles */
.swiper-button-next,
.swiper-button-prev {
  color: white;
  z-index: 10;
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.5rem;
  color: white;
}

/* Modal styles */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}

.z-50 {
  z-index: 50;
}

.bg-opacity-70 {
  background-color: rgba(0, 0, 0, 0.7);
}

button {
  cursor: pointer;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>