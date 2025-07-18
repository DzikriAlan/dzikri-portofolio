<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface NavigationItem {
 id: number;
 label: string;
 target: string;
}

const props = defineProps<{
 items?: NavigationItem[];
}>();

const { t } = useI18n();

// Use computed property to update when language changes
const navigationItems = computed<NavigationItem[]>(() => {
 if (props.items) return props.items;
 
 return [
   { id: 1, label: t('navigator.about'), target: 'herolayout' },
   { id: 2, label: t('navigator.work'), target: 'kazeestory' },
   { id: 2, label: t('navigator.faq'), target: 'faq' },
   { id: 3, label: t('navigator.more'), target: 'experience' }
 ];
});

const activeSection = ref<string>('herolayout');

const scrollToSection = (targetId: string) => {
 const element = document.getElementById(targetId);
 if (element) {
   element.scrollIntoView({ 
     behavior: 'smooth',
     block: 'start'
   });
   activeSection.value = targetId;
 }
};

const checkActiveSection = () => {
 const scrollPosition = window.scrollY + 100; // Add offset for better UX

 for (const item of navigationItems.value) {
   const element = document.getElementById(item.target);
   if (element) {
     const { offsetTop, offsetHeight } = element;
     if (
       scrollPosition >= offsetTop &&
       scrollPosition < offsetTop + offsetHeight
     ) {
       activeSection.value = item.target;
       return;
     }
   }
 }
};

onMounted(() => {
 window.addEventListener('scroll', checkActiveSection);
 checkActiveSection(); // Check initial active section
});

onUnmounted(() => {
 window.removeEventListener('scroll', checkActiveSection);
});
</script>
<template>
 <div class="fixed bottom-[3rem] left-0 right-0 flex justify-center z-50">
   <div class="bg-black box-shadow-navigator rounded-full px-6 py-3 flex items-center space-x-6 border-navigator">
    <a
       v-for="item in navigationItems"
       :key="item.id"
       @click.prevent="scrollToSection(item.target)"
       href="#"
       class="no-style-a font-medium text-sm text-navigation"
       :class="activeSection == item.target && 'text-white'"
     >
       {{ item.label }}
     </a>
   </div>
 </div>
</template>