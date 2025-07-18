<script setup lang="ts">
import { ref, reactive} from 'vue'
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import CardProject from '@/components/reusable/CardProject.vue';
import lsp1 from '@/assets/images/company/lsp1.png';
import lsp2 from '@/assets/images/company/lsp2.png';
import lsp3 from '@/assets/images/company/lsp3.png';
import lsp5 from '@/assets/images/company/lsp5.png';
import cost1 from '@/assets/images/company/cost1.png';
import cost2 from '@/assets/images/company/cost2.png';
import cost3 from '@/assets/images/company/cost3.png';
import lurah1 from '@/assets/images/company/lurah1.png';
import lurah2 from '@/assets/images/company/lurah2.png';
import lurah3 from '@/assets/images/company/lurah3.png';
import smi from '@/assets/images/logo-company/smi.jpeg'
import laravel from '@/assets/svg/skills/laravel.svg?format=webp'
import vue from '@/assets/svg/skills/vuejs.svg?format=webp'
import codeigniter from '@/assets/svg/skills/codeigniter.svg?format=webp'

const logo = ref(smi);
const data = reactive([
  {
    title: 'smistory.lsp.title',
    subtitle: 'smistory.lsp.subtitle',
    images: [lsp1, lsp2, lsp3, lsp5],
    techStack: [
      { name: 'Vue.js', icon: vue },
      { name: 'Laravel', icon: laravel },
    ]
  },
  {
    title: 'smistory.sipadatasih.title',
    subtitle: 'smistory.sipadatasih.subtitle',
    images: [lurah1, lurah2, lurah3],
    techStack: [
      { name: 'Laravel', icon: laravel },
    ]
  },
  {
    title: 'smistory.cc.title',
    subtitle: 'smistory.cc.subtitle',
    images: [cost1, cost2, cost3],
    techStack: [
      { name: 'CodeIgniter', icon: codeigniter },
    ]
  }
])
</script>
<template>
  <div id="suryamicrosystemsstory">
    <NavbarLayout id="suryamicrosystemsstory" label="Surya Microsystems"  year="2023"  position="Fullstack Developer" :logo="logo"/>
    <div class="w-full md:w-[90%] lg:w-4/5 xl:w-3/4 mx-auto bg-black text-white p-4 md:p-6 lg:p-8 pt-0">
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