<script lang="ts" setup>
import { ref } from 'vue';
import JourneyLayout from '@/components/layout/JourneyLayout.vue';
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import SkillsContent from '@/components/content/SkillsContent.vue';

interface JourneyItem {
  label: string;
  link: string;
  date: string;
  position: string;
}

const data = ref<JourneyItem[]>([
  {
    label: 'Kazee',
    link: 'https://kazee.id/',
    date: '2023 - Now',
    position: 'Fullstack Web Developer'
  },
  {
    label: 'Surya Microsystems',
    link: 'https://www.suryamicrosystems.com/',
    date: '2023',
    position: 'Fullstack Web Developer'
  }
]);

</script>
<template>
  <div id="experience" style="margin-top: 1px;">
    <NavbarLayout id="experience" label="Experience & Skills"/>
    <div class="container mx-auto px-8 sm:px-4 py-8">
      <JourneyLayout :data="data" />
      <SkillsContent />
    </div>
  </div>
</template>