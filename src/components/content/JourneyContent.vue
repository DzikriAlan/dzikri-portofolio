<script lang="ts" setup>
import { ref } from 'vue';
import JourneyLayout from '@/components/layout/JourneyLayout.vue';
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import SkillsContent from '@/components/content/SkillsContent.vue';

interface JourneyItem {
  label: string;
  github: string;
  browser?: string;
  stack: Array<any>;
  position: string;
}

const data = ref<JourneyItem[]>([
  {
    label: 'Web Ekskul ICT',
    github: 'https://github.com/DzikriAlan/ICT-PROJECT',
    browser: 'https://ict-project-v3.vercel.app/',
    stack: ['Javascript', 'PHP', 'TailwindCSS'],
    position: 'Fullstack Developer'
  },
  {
    label: 'Laundry System',
    github: 'https://github.com/DzikriAlan/laundry-system',
    stack: ['Laravel' ,'VueJS'],
    position: 'Fullstack Developer'
  }
]);

</script>
<template>
  <div id="experience" style="margin-top: 1px;">
    <NavbarLayout id="experience" label="Personal Project & Skills"/>
    <div class="container mx-auto px-8 sm:px-4 py-8 pt-0">
      <JourneyLayout :data="data" />
      <SkillsContent />
    </div>
  </div>
</template>