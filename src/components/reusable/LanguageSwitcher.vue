<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import indonesiaFlag from '@/assets/svg/flags/indo.svg';
import usaFlag from '@/assets/svg/flags/usa.svg';

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const currentLanguageIcon = computed(() => {
  return locale.value === 'id' ? indonesiaFlag : usaFlag;
});

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en';
  
  localStorage.setItem('language', locale.value);
};

const initializeLocale = () => {
  const savedLocale = localStorage.getItem('language');
  if (savedLocale && (savedLocale === 'en' || savedLocale === 'id')) {
    locale.value = savedLocale;
  }
};

const isVisible = ref(false);
const isSticky = ref(false);
const targetElement = ref<HTMLElement | null>(null);
const targetNavElement = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!targetElement.value) return;
  
  const targetRect = targetElement.value.getBoundingClientRect();
  const targetNavRect = targetNavElement.value.getBoundingClientRect();
  
  if (targetNavRect.top <= 0 && targetRect.bottom > 0) {
    isVisible.value = true;
    isSticky.value = true;
  } else if (targetRect.top > 0) {
    isVisible.value = false;
    isSticky.value = false;
  } else if (targetRect.bottom <= 0) {
    isVisible.value = true;
    isSticky.value = false;
  }
};

onMounted(() => {
  targetElement.value = document.getElementById('herolayout');
  targetNavElement.value = document.getElementById('herolayout');
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

initializeLocale();
</script>
<template>
  <button 
    @click="toggleLanguage" 
    class="bg-black box-shadow-navigator rounded-full px-4 py-2 flex items-center space-x-6 border-navigator"
  >
    <img :src="currentLanguageIcon" :alt="currentLocale" class="w-5 h-5 rounded-sm" />
    <span class="text-white text-sm ml-4">{{ currentLocale.toUpperCase() }}</span>
  </button>
</template>