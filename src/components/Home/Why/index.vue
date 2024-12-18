<template>
    <div class="pt-20 pb-12 lg:px-6 px-0">
     
            <section class="bg-animated cyber-grid relative overflow-hidden">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center mb-5" data-text="Why choose us">Why you go dey buy from us</h2>
                    <p class="tracking-wider uppercase pb-12 text-center">Check out our premium quality iron rods designed to strengthen your projects and make them stand the test of time. </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="feature-card rounded-lg p-6 floating">
                            <div class="text-5xl mb-4 text-cyan-400 feature-icon">
                               <FlFilledShieldCheckmark/>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts">Premium Quality Materials</h3>
                            <p class="text-gray-300">We no dey joke with quality. Na only original and certified materials we dey sell. From cement to steel, everything go meet industry standard.</p>
                        </div>
                        <div class="feature-card rounded-lg p-6 floating" style="animation-delay: 1s;">
                            <div class="text-5xl mb-4 text-pink-500 feature-icon">
                                <IoPricetags/>
                                
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts">Competitive Pricing</h3>
                            <p class="text-gray-300">Our prices no dey cut your throat. We dey balance quality with affordability, so you no go need pay extra for good materials.</p>
                        </div>
                        <div class="feature-card rounded-lg p-6 floating" style="animation-delay: 2s;">
                            <div class="text-5xl mb-4 text-purple-500 feature-icon">
                                <CaDelivery/>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts">Reliable Delivery</h3>
                            <p class="text-gray-300">We dey deliver your materials as you need am. No delay, no story—sharp-sharp delivery to keep your project moving</p>
                        </div>
                        <div class="feature-card rounded-lg p-6 floating" style="animation-delay: 0.5s;">
                            <div class="text-5xl mb-4 text-green-400 feature-icon">
                                <FlFilledPersonSupport/>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts"> Expert Support</h3>
                            <p class="text-gray-300">Our team go always dey your back. Whether you need advice, technical support, or help with choosing materials, we dey here for you.</p>
                        </div>
                        <div class="feature-card rounded-lg p-6 floating" style="animation-delay: 1.5s;">
                            <div class="text-5xl mb-4 text-yellow-400 feature-icon">
                            <McTowerCraneFill/>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts">Wide Product Range</h3>
                            <p class="text-gray-300">We get all the materials wey you fit need—bricks, cement, iron rods, tiles, roofing sheets, and more. Anything wey your project require, we go fit supply am.</p>
                        </div>
                        <div class="feature-card rounded-lg p-6 floating" style="animation-delay: 2.5s;">
                            <div class="text-5xl mb-4 text-red-500 feature-icon">
                                <FaHandshakeAngle/>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 header-texts">Trusted by Many Builders</h3>
                            <p class="text-gray-300">Plenty builders and contractors dey trust us because we no dey fail. From small projects to big government contracts, we don deliver materials give plenty people.</p>
                        </div>
                    </div>
                </div>
            </section>
        <!-- </body> -->

    </div>
</template>

<script>
import { FlFilledShieldCheckmark } from '@kalimahapps/vue-icons';
import { IoPricetags } from '@kalimahapps/vue-icons';
import { CaDelivery } from '@kalimahapps/vue-icons';
import { FlFilledPersonSupport } from '@kalimahapps/vue-icons';
import { McTowerCraneFill } from '@kalimahapps/vue-icons';
import { FaHandshakeAngle } from '@kalimahapps/vue-icons';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        FlFilledShieldCheckmark,
        IoPricetags,
        CaDelivery,
        FlFilledPersonSupport,
        McTowerCraneFill,
        FaHandshakeAngle
    }
})
</script>



<style scoped>
@keyframes neon-pulse {
    0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #27e08f, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }
    50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #27e08f, 0 0 20px #27e08f, 0 0 25px #27e08f, 0 0 37px #00ffff; }
}



.bg-animated {
    background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.header-texts{
    color: #27e08f;
}

.cyber-grid {
    background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    animation: cyber-grid-move 20s linear infinite;
}

@keyframes cyber-grid-move {
    0% { background-position: 0 0; }
    100% { background-position: 20px 20px; }
}

.feature-card {
    backdrop-filter: blur(10px);
    background-color: #000000;
    border: 1px solid rgba(0, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}



@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.floating {
    animation: float 6s ease-in-out infinite;
}

.glitch-effect {
    position: relative;
    overflow: hidden;
}

.glitch-effect::before,
.glitch-effect::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.glitch-effect::before {
    left: 2px;
    text-shadow: -2px 0 #ff00de;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim 3s infinite linear alternate-reverse;
}

.glitch-effect::after {
    left: -2px;
    text-shadow: -2px 0 #00ffff;
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% { clip: rect(39px, 9999px, 71px, 0); }
    20% { clip: rect(3px, 9999px, 5px, 0); }
    40% { clip: rect(6px, 9999px, 38px, 0); }
    60% { clip: rect(13px, 9999px, 43px, 0); }
    80% { clip: rect(44px, 9999px, 93px, 0); }
    100% { clip: rect(54px, 9999px, 47px, 0); }
}
</style>