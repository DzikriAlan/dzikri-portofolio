<script setup lang="ts">
  import { ref } from 'vue'
  import arrowUpRight from '@/assets/svg/arrowUpRight.svg?format=webp'
  const arrowUpRightIcon = ref(arrowUpRight)

  defineProps({
    data: { type: Array, required: true },
  });
  
</script>
<template>
  <div class="w-full md:w-4/5 lg:w-[60%] mx-auto bg-black text-white">
    <div class="w-full space-y-6">
      <div v-for="(item, index) in data" :key="index" class="w-full mt-3">
        <div class="flex justify-between w-full py-3 mb-3 gap-2 md:gap-4">
          <div class="w-1/2 text-white">
            <a :href="item?.link" target="_blank" class="flex no-style-a">
              <span class="text-white font-bold text-[18px] font-medium text-amber-50 text-wrap">
                {{ item?.label }}
                <span class="inline-block transform translate-y-[5px]"><img width="20" height="20" :src="arrowUpRightIcon" /></span>
              </span>
            </a>
            <p class="text-[18px] text-[#cacaca] text-wrap">{{ item?.date }}</p>
          </div>
          <div class="w-1/2">
            <p class="text-[18px] text-[#cacaca] text-end text-wrap">{{ item?.position }}</p>
          </div>
        </div>
        <div class="w-full h-[0.5px] bg-[#474747]"></div>
      </div>
    </div>
  </div>
</template>