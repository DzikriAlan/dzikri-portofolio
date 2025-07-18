<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Tag from '@/components/reusable/Tag.vue'

const props = defineProps<{
  id: string;
  label: string;
  position?: string;
  year?: string;
  logo?: string;
}>();

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
  targetElement.value = document.getElementById(props.id);
  targetNavElement.value = document.getElementById(`nav${props.id}`);
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto bg-black text-white py-0 p-4 md:p-6 lg:p-8 pt-0">
    <div class="w-[95%] sm:w-[70%] flex flex-column justify-start mx-auto mb-5">
      <div :id="`nav${id}`" class="w-full flex items-center py-7"
        :class="[year ? 'justify-between' : 'justify-center']"
      >
        <h1 class="text-xl text-white font-bold flex align-items-center">
          <div class="flex items-center justify-center">
            <img v-if="logo" width="36" height="36" :src="logo" alt="logo company" class="mr-4 rounded-md logo-neon"/>
              {{ label }}
          </div>
        </h1>
        <Tag v-if="year" :label="year" border-width="2px" class="bg-black border-gray-950"/>
      </div>
    </div>
  </div>
  <nav
    class="fixed top-0 left-0 right-0 bg-black-shadow text-white z-50"
    :class="{ 'translate-y-0 shadow-lg': isSticky, '-translate-y-full': !isSticky }"
  >
    <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto py-0 p-4 md:p-6 lg:p-8 pt-0">
      <div class="w-[95%] sm:w-[70%] flex flex-column justify-start mx-auto mb-5">
        <div class="w-full flex items-center py-7"
          :class="[year ? 'justify-between' : 'justify-center']"
        >
          <h1 class="text-xl text-white font-bold flex align-items-center">
            <div class="flex items-center justify-center">
              <img v-if="logo" width="36" height="36" :src="logo" alt="logo company" class="mr-4 rounded-md logo-neon"/>
                {{ label }}
            </div>
          </h1>
          <Tag v-if="year" :label="year" border-width="2px" class="bg-black border-gray-950"/>
        </div>
      </div>
    </div>
  </nav>
</template>