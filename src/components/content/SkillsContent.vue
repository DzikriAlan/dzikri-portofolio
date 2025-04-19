<script setup lang="ts">
import SkillsLayout from '@/components/layout/SkillsLayout.vue';
import html from '@/assets/svg/skills/html.svg?format=webp'
import css from '@/assets/svg/skills/css.svg?format=webp'
import js from '@/assets/svg/skills/javascript.svg?format=webp'
import ts from '@/assets/svg/skills/typescript.svg?format=webp'
import node from '@/assets/svg/skills/nodejs.svg?format=webp'
import vue from '@/assets/svg/skills/vuejs.svg?format=webp'
import php from '@/assets/svg/skills/php.svg?format=webp'
import laravel from '@/assets/svg/skills/laravel.svg?format=webp'
import codeigniter from '@/assets/svg/skills/codeigniter.svg?format=webp'

const data = [
  { label: 'HTML', svg: html },
  { label: 'CSS', svg: css },
  { label: 'JAVASCRIPT', svg: js },
  { label: 'TYPESCRIPT', svg: ts },
  { label: 'NODE.JS', svg: node },
  { label: 'VUE.JS', svg: vue },
  { label: 'PHP', svg: php },
  { label: 'LARAVEL', svg: laravel },
  { label: 'CODEIGNITER', svg: codeigniter }
];
</script>

<template>
  <div class="container py-8">
    <SkillsLayout :skills="data" />
  </div>
</template>