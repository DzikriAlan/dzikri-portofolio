<script setup lang="ts">
import { ref, reactive } from 'vue'
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import CardProject from '@/components/reusable/CardProject.vue';
import medmon1 from '@/assets/images/company/medmon1.png';
import medmon2 from '@/assets/images/company/medmon2.png';
import medmon3 from '@/assets/images/company/medmon3.png';
import smartboard1 from '@/assets/images/company/smartboard1.png';
import smartboard2 from '@/assets/images/company/smartboard2.png';
import smartboard3 from '@/assets/images/company/smartboard3.png';
import aisearch1 from '@/assets/images/company/aisearch1.png';
import trendnowai1 from '@/assets/images/company/trendnowai1.png';
import trendnowai2 from '@/assets/images/company/trendnowai2.png';
import kazee from '@/assets/images/logo-company/kazeelogo.jpeg'

const logo = ref(kazee)
import ts from '@/assets/svg/skills/typescript.svg?format=webp'
import vue from '@/assets/svg/skills/vuejs.svg'
import laravel from '@/assets/svg/skills/laravel.svg?format=webp'

const data = reactive([
  {
    title: 'kazeestory.medmon.title',
    subtitle: 'kazeestory.medmon.subtitle',
    images: [medmon1, medmon2, medmon3],
    techStack: [
      { name: 'Vue.js', icon: vue },
      { name: 'TypeScript', icon: ts },
    ]
  },
  {
    title: 'kazeestory.trendnow.title',
    subtitle: 'kazeestory.trendnow.subtitle',
    images: [trendnowai1, trendnowai2],
    techStack: [
      { name: 'Laravel', icon: laravel },
    ]
  },
  {
    title: 'kazeestory.kazeesmartboard.title',
    subtitle: 'kazeestory.kazeesmartboard.subtitle',
    images: [smartboard1, smartboard2, smartboard3],
    techStack: [
      { name: 'Vue.js', icon: vue },
      { name: 'TypeScript', icon: ts },
    ]
  },
  {
    title: 'kazeestory.aisearch.title',
    subtitle: 'kazeestory.aisearch.subtitle',
    images: [aisearch1],
    techStack: [
      { name: 'Vue.js', icon: vue },
      { name: 'TypeScript', icon: ts },
    ]
  }

])
</script>
<template>
  <div id="kazeestory">
    <NavbarLayout id="kazeestory" label="Kazee" year="2023 - Now" position="Frontend Developer" :logo="logo"/>
    <div class="w-full md:w-[90%] lg:w-4/5 xl:w-3/4 mx-auto bg-black text-white p-4 md:p-6 lg:p-8">
      <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center mx-auto mb-5">
        <CardProject 
          v-for="(item, index) in data"
          :key="index"
          :title="item.title"
          :subtitle="item.subtitle"
          :tech-stack="item.techStack"
          :images="item.images"
        />
      </div>
    </div>
  </div>
</template>