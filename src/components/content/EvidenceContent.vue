<script lang="ts" setup>
import { ref } from 'vue';
import MarqueeContent from '@/components/content/MarqueeContent.vue'
import medmon1 from '@/assets/images/company/medmon1.png';
import trendnowai1 from '@/assets/images/company/trendnowai1.png';
import smartboard1 from '@/assets/images/company/smartboard1.png';
import aisearch1 from '@/assets/images/company/aisearch1.png';
import lsp1 from '@/assets/images/company/lsp1.png';
import cost1 from '@/assets/images/company/cost1.png';
import lurah1 from '@/assets/images/company/lurah1.png';

const images = ref([
  { type: 'image', src: medmon1, alt: 'Medmon Screenshot 1' },
  { type: 'image', src: trendnowai1, alt: 'TrendNow AI Screenshot 1' },
  { type: 'image', src: smartboard1, alt: 'Smartboard Screenshot 1' },
  { type: 'image', src: aisearch1, alt: 'AI Search Screenshot 1' },
  { type: 'image', src: lsp1, alt: 'LSP Screenshot 1' },
  { type: 'image', src: cost1, alt: 'Cost App Screenshot 1' },
  { type: 'image', src: lurah1, alt: 'Lurah App Screenshot 1' },
])
</script>
<template>
  <MarqueeContent :data="images" />
</template>