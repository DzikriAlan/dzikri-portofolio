<script setup lang="ts">
import Tag from '@/components/reusable/Tag.vue';

interface Skill {
  label: string;
  svg?: string;
  reverse?: boolean;
}

interface Props {
  skills: Skill[];
}

defineProps<Props>();
</script>
<template>
  <div class="w-full md:w-4/5 lg:w-[60%] mx-auto bg-black text-white">
    <div class="w-full space-y-6">
      <div class="flex justify-start flex-wrap gap-2">
        <div v-for="(skill, index) in skills" :key="index" 
             class="border border-gray-300 rounded py-2">
          <Tag :label="skill.label" :svg="skill.svg" useSvg :reverse="skill.reverse || false" />
        </div>
      </div>
    </div>
  </div>
</template>