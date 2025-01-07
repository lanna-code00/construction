<script>
import { defineComponent, ref } from "vue";
import { QuHamburgerSidebar, HuTimes } from "@kalimahapps/vue-icons";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    QuHamburgerSidebar,
    HuTimes,
  },
  setup() {
    const menus = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about-us",
      },
      {
        name: "Products",
        path: "/products",
      },
    ];

    const isMenuOpen = ref(false);
    const route = useRoute();

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const isActive = (path) => {
      return route.path === path;
    };
    return {
      menus,
      isMenuOpen,
      toggleMenu,
      isActive,
    };
  },
});
</script>

<template>
  <div class="w-full fixed z-20 top-0 left-0 right-0 bg-transparent">
    <nav
      class="lg:bg-black shadow-2xl lg:shadow-none lg:max-w-[1380px] w-[94%] mx-auto m-4 p-5 rounded-xl"
    >
      <div class="flex items-center justify-between px-4 h-16">
        <div class="text-[#FFEF00] font-bold text-2xl hidden lg:flex">
          J.MARTINS
        </div>
        <div class="text-black font-bold text-2xl lg:hidden flex">
          J.MARTINS
        </div>

        <div class="items-center space-x-12 hidden lg:flex">
          <RouterLink
            :to="menu.path"
            v-for="menu in menus"
            :key="menu.name"
            :class="{
              'text-[#FFEF00]': isActive(menu.path),
              'text-white': !isActive(menu.path),
              'hover:text-gray-400': true,
            }"
          >
            {{ menu.name }}
          </RouterLink>
        </div>

        <RouterLink
          to="/"
          class="text-black hidden lg:flex px-4 py-2 rounded-full bg-[#FFEF00]"
        >
          Buy from us
        </RouterLink>

        <div class="lg:hidden" @click="toggleMenu">
          <QuHamburgerSidebar class="w-10 h-20 cursor-pointer" />
        </div>
      </div>

      <transition name="fade-slide">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-white flex items-center justify-center z-30"
          @click="toggleMenu"
        >
          <div
            class="bg-white text-black w-full h-full flex flex-col space-y-6 overflow-y-auto relative"
            @click.stop
          >
            <div class="flex justify-between items-center mb-4 px-5">
              <div class="text-black font-bold text-2xl">J.MARTINS</div>
              <HuTimes class="w-10 h-20 cursor-pointer" @click="toggleMenu" />
            </div>

            <RouterLink
              :to="menu.path"
              v-for="menu in menus"
              :key="menu.name"
              class="px-5"
              :class="{
                'text-white bg-black px-5 py-3': isActive(menu.path),
                'text-black': !isActive(menu.path),
                'hover:text-[#FFEF00]': true,
              }"
            >
              {{ menu.name }}
            </RouterLink>

            <RouterLink
              to="https://wa.me/2348106714056?text=Hello Martins,%20I%20wan%20to%20buy..."
              class="text-black divide-y divide-teal-400 hover:text-gray-400 rounded-full px-5"
              @click="toggleMenu"
              target="_blank"
            >
              Buy from us
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-active,
.fade--leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
