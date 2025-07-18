<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n';
import HeroLayout from '@/components/layout/HeroLayout.vue'
import Tag from '@/components/reusable/Tag.vue'
import arrowUpRight from '@/assets/svg/arrowUpRight.svg?format=webp'
import LanguageSwitcher from '../reusable/LanguageSwitcher.vue';

const arrowUpRightIcon = ref(arrowUpRight)
const { t } = useI18n();
const isHeroVisible = ref(true);

const openCVInNewTab = () => {
  window.open('/src/assets/cv/Dzikri-Alan-Ramadhan.pdf', '_blank')
}

// Observer setup for tracking visibility
const heroRef = ref(null);

const checkVisibility = () => {
  if (!heroRef.value) return;
  
  const heroRect = (heroRef.value as HTMLElement).getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Check if at least part of the hero is visible in the viewport
  isHeroVisible.value = heroRect.top < windowHeight && heroRect.bottom > 0;
};

onMounted(() => {
  heroRef.value = document.getElementById('herolayout');
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check initial visibility
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
});
</script>
<template>
  <HeroLayout id="herolayout" ref="heroRef">
    <template #left>
      <div>
        <div class="flex flex-col">
          <span class="text-[24px] sm:text-[32px] font-bold text-white">Dzikri Alan</span>
          <span class="text-[24px] sm:text-[32px] mb-5 -translate-y-2 md:-translate-y-[10px]">Fullstack Developer</span>
        </div>
        <p class="sm:text-base text-sm mb-6">
        {{ t('hero.sayhi') }}<b class="text-white">Dzikri Alan</b> {{ t('hero.where') }} <b class="text-white">Kazee</b>, 
        {{ t('hero.story') }}
        </p>
        <p class="sm:text-base text-sm mb-6">
        {{ t('hero.inmy') }} <b class="text-white">{{ t('hero.experienceYears') }}</b> {{ t('hero.experience') }}
        </p>
        <div class="flex items-center gap-4 flex-wrap mb-6">
          <a class="no-style-a" target="_blank" href="mailto:dzikripride@gmail.com"><Tag label="Email" :svg="arrowUpRightIcon" useSvg /></a>
          <a class="no-style-a" target="_blank" href="https://www.instagram.com/_dzikrialan/"><Tag label="Instagram" :svg="arrowUpRightIcon" useSvg /></a>
          <a class="no-style-a" target="_blank" href="https://www.linkedin.com/in/dzikri-alan/"><Tag label="LinkedIn" :svg="arrowUpRightIcon" useSvg /></a>
          <!-- <a class="no-style-a" target="_blank" href="#" @click.prevent="openCVInNewTab"><Tag label="CV/Resume" :svg="arrowUpRightIcon" useSvg /></a> -->
        </div>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <transition name="fade">
          <LanguageSwitcher v-if="isHeroVisible" class="fixed top-4 right-4 z-50" />
        </transition>
        <div class="w-48 h-48 sm:w-60 sm:h-60 relative">
          <div class="image-container relative w-full h-full">
            <img 
              src="@/assets/images/decoration/gifimage.gif" 
              alt="Dzikri Alan" 
              class="w-full h-full object-cover object-center absolute inset-0 transition-all duration-300 z-20 scale-125 transform"
            />
            <img 
              src="@/assets/images/gue/gue4.jpg" 
              alt="Dzikri Alan" 
              class="w-full h-full object-cover rounded-full object-center absolute inset-0 z-10" 
            />
            <img 
              src="@/assets/images/decoration/gifimage2.gif" 
              alt="Animated Element" 
              class="w-48 h-48 object-cover rounded-full absolute bottom-0 left-0 z-30 transform translate-x-[-30%] translate-y-[30%]" 
            />
          </div>
        </div>
        <div class="hidden sm:block absolute sm:bottom-[30px] sm:-left-[120px] sm:z-30 sm:text-[1.45rem] sm:font-caveat sm:italic sm:w-[100px] sm:transform sm:-rotate-[20deg] font-bold">Let me introduce myself</div>
        <div class="flex justify-center transform translate-y-[50px]">
          <div class="text-md italic text-center font-caveat w-[250px]">
            (Happy where I am — here's a glimpse of my journey so far!)
          </div>
        </div>
      </div>
    </template>
  </HeroLayout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>