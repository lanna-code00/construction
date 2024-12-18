<template>
    <div>
        <footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center shadow-2xl bg-[#ffffff] text-black">
            <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
                    Ready to get your productivity back?<br>Start your free trial today.
                </h2>
                <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#27e08f] rounded-full shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
                    href="#">Buy o!!</a>
                <div class="mt-14 xl:mt-20">
                    <nav class="flex flex-wrap justify-center text-lg font-medium">
                        <div class="px-5 py-2"><a href="#">About</a></div>
                        <div class="px-5 py-2"><a href="#">Products</a></div>
                        
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