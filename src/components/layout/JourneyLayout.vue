<script setup lang="ts">
import githubWhite from '@/assets/svg/skills/github-white.svg'
import arrowUpRight from '@/assets/svg/arrowUpRight.svg';
interface JourneyItem {
  link?: string;
  label?: string;
  stack?: string;
  position?: string;
}

defineProps({
  data: { type: Array as () => JourneyItem[], required: true },
});

</script>
<template>
  <div class="w-full md:w-4/5 lg:w-[60%] mx-auto bg-black text-white">
    <div class="w-full space-y-6">
      <div v-for="(item, index) in data" :key="index" class="w-full mt-3">
        <div class="flex justify-between w-full py-3 mb-3 gap-2 md:gap-4">
          <div class="w-1/2 text-white">
            <a :href="item?.link" target="_blank" class="flex no-style-a">
              <span class="font-bold text-[0.9rem] font-medium text-[#cacaca] text-wrap">
                {{ item?.label }}
              </span>
            </a>
            <span v-for="stackItem in item.stack" class="mr-2 text-[0.5rem] text-[#cacaca] text-wrap px-3 py-1 rounded bg-[#222] cursor-pointer inline-block hover:bg-[#333] focus:outline-none" role="button" tabindex="0">{{ stackItem }}</span>
          </div>
          <div class="flex justify-end w-1/2">
            <a v-if="item?.github" :href="item.github" target="_blank" class="cursor-pointer">
              <img width="20" height="20" :src="githubWhite" alt="github" />
            </a>
            <a v-if="item?.browser" :href="item.browser" target="_blank" class="ml-2 cursor-pointer">
              <img width="24" height="24" :src="arrowUpRight" alt="browser" />
            </a>
          </div>
        </div>
        <div class="w-full h-[0.5px] bg-[#474747]"></div>
      </div>
    </div>
  </div>
</template>