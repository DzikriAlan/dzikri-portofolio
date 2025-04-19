<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import HeroLayout from '@/components/layout/HeroLayout.vue'
import Tag from '@/components/reusable/Tag.vue'
import arrowUpRight from '@/assets/svg/arrowUpRight.svg?format=webp'
import LanguageSwitcher from '../reusable/LanguageSwitcher.vue';

const arrowUpRightIcon = ref(arrowUpRight)
const { t } = useI18n();
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/src/assets/cv/Dzikri-Alan-Ramadhan.pdf' // Adjust filename as needed
  link.download = 'Dzikri-Alan-Ramadhan-Resume.pdf'
  link.click()
}
</script>
<template>
  <HeroLayout id="herolayout">
    <template #left>
      <div>
        <div class="flex flex-col">
          <span class="text-[24px] sm:text-[32px] font-bold text-white">Dzikri Alan</span>
          <span class="text-[24px] sm:text-[32px] mb-5 -translate-y-2 md:-translate-y-[10px]">Fullstack Web Developer</span>
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
          <a class="no-style-a" target="_blank" href="https://www.linkedin.com/in/dzikri-alan/"><Tag label="Linkedin" :svg="arrowUpRightIcon" useSvg /></a>
          <a class="no-style-a" target="_blank" href="#" @click.prevent="downloadCV"><Tag label="CV/Resume" :svg="arrowUpRightIcon" useSvg /></a>
        </div>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <LanguageSwitcher class="fixed top-4 right-4 z-50" />
        <div class="w-48 h-48 sm:w-60 sm:h-60 relative">
          <div class="image-container relative w-full h-full">
            <img 
              src="@/assets/images/decoration/gifimage.gif" 
              alt="Dzikri Alan" 
              class="w-full h-full object-cover object-center absolute inset-0 transition-all duration-300 z-20 scale-125 transform"
            />
            <img 
              src="@/assets/images/gue/gue3.jpg" 
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
            (I am no longer looking for a job but keeping this video up)
          </div>
        </div>
      </div>
    </template>
  </HeroLayout>
</template>