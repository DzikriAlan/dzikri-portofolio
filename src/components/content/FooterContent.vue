<script lang="ts" setup>
import { ref } from 'vue'
import FooterLayout from '../layout/FooterLayout.vue';
import github from '@/assets/svg/skills/github-white.svg?format=webp'
import gitlab from '@/assets/svg/skills/gitlab-white.svg?format=webp'
import linkedin from '@/assets/svg/skills/linkedin-white.svg?format=webp'
import instagram from '@/assets/svg/skills/square-instagram-white.svg?format=webp'

const images = ref([
  { src: github, link: 'https://github.com/DzikriAlan' },
  { src: gitlab, link: 'https://gitlab.com/DzikriRama' },
  { src: linkedin, link: 'https://www.linkedin.com/in/dzikri-alan/' },
  { src: instagram, link: 'https://www.instagram.com/_dzikrialan/' }
])
</script>
<template>
  <FooterLayout>
    <template #list>
      <div class="flex flex-wrap justify-center gap-1">
        <a v-for="(image, index) in images" :key="index" 
           class="flex items-center p-2 hover:opacity-80 transition-opacity duration-200"
           :href="image.link"
           target="_blank"
           rel="noopener noreferrer">
          <img :src="image.src" alt="" class="w-5 h-5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </template>
  </FooterLayout>
</template>