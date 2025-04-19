<script setup lang="ts">
  defineProps({
    images: { type: Array, required: true },
    multiple: { type: Boolean, default: false},
    labelFigcaption: { type: String, default: ''}
  });
</script>
<template>
  <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto bg-black text-white p-4 md:p-6 lg:p-8">
    <div class="w-[95%] sm:w-[70%] flex flex-column justify-start mx-auto mb-5">
      <div class="heading-container mb-4 md:mb-6">
        <h1 class="text-[24px]"><slot name="h1"></slot></h1>
      </div>
      
      <div class="paragraph-container mb-6 md:mb-8 text-[18px]">
        <slot name="paragraph"></slot>
      </div>
    </div>
    <div class="w-[95%] flex flex-column justify-start mx-auto mb-5 sm:w-auto sm:block sm:justify-normal sm:mx-0 sm:mb-0">
      <div v-if="images.length < 2" class="image-container w-full overflow-hidden">
        <figure>
          <img :src="images[0]" :alt="labelFigcaption" class="w-full h-auto rounded-lg" />
          <figcaption v-if="labelFigcaption" class="mt-2 text-xs text-[#8a8888] text-center">{{ labelFigcaption }}</figcaption>
        </figure>
        </div>
      <div v-else-if="images.length === 2" class="mb-8">
        <div class="flex justify-end mb-2">
          <div class="w-full md:w-[90%]">
            <figure>
              <img :src="images[0]" :alt="labelFigcaption" class="w-full h-auto rounded-lg" />
            </figure>
          </div>
        </div>
        <div class="flex justify-start">
          <div class="w-full md:w-[90%]">
            <figure>
              <img :src="images[1]" :alt="labelFigcaption" class="w-full h-auto rounded-lg" />
            </figure>
          </div>
        </div>
      <figcaption v-if="labelFigcaption" class="mt-2 text-center text-xs text-[#8a8888]">{{ labelFigcaption }}</figcaption>
      </div>
      <div v-else class="mb-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <figure v-for="(image, index) in images.slice(0, 4)" :key="index" class="rounded-lg overflow-hidden h-auto md:h-[182px] flex items-center justify-center">
      <img :src="image" :alt="labelFigcaption" class="w-full h-auto max-h-full object-contain rounded-lg" />
    </figure>
  </div>
  <figcaption v-if="labelFigcaption" class="mt-2 text-xs text-[#8a8888] text-center">{{ labelFigcaption }}</figcaption>
</div>
    </div>
  </div>
</template>