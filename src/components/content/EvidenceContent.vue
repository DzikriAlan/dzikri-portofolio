<script lang="ts" setup>
import { ref } from 'vue';
import MarqueeContent from '@/components/content/MarqueeContent.vue'
import medmon1 from '@/assets/images/company/medmon1.png';
import medmon2 from '@/assets/images/company/medmon2.png';
import medmon3 from '@/assets/images/company/medmon3.png';
import crm1 from '@/assets/images/company/crm1.png';
import crm2 from '@/assets/images/company/crm2.png';
import crm3 from '@/assets/images/company/crm3.png';
import trendnowai1 from '@/assets/images/company/trendnowai1.png';
import trendnowai2 from '@/assets/images/company/trendnowai2.png';
import trendnowai3 from '@/assets/images/company/trendnowai3.png';
import lsp1 from '@/assets/images/company/lsp1.png';
import lsp2 from '@/assets/images/company/lsp2.png';
import lsp3 from '@/assets/images/company/lsp3.png';
import cost1 from '@/assets/images/company/cost1.png';
import cost2 from '@/assets/images/company/cost2.png';
import cost3 from '@/assets/images/company/cost3.png';
import lurah1 from '@/assets/images/company/lurah1.png';
import lurah2 from '@/assets/images/company/lurah2.png';
import lurah3 from '@/assets/images/company/lurah3.png';

const images = ref([
  { type: 'image', src: medmon1, alt: 'Medmon Screenshot 1' },
  { type: 'image', src: medmon2, alt: 'Medmon Screenshot 2' },
  { type: 'image', src: medmon3, alt: 'Medmon Screenshot 3' },
  { type: 'image', src: crm1, alt: 'CRM Screenshot 1' },
  { type: 'image', src: crm2, alt: 'CRM Screenshot 2' },
  { type: 'image', src: crm3, alt: 'CRM Screenshot 3' },
  { type: 'image', src: trendnowai1, alt: 'TrendNow AI Screenshot 1' },
  { type: 'image', src: trendnowai2, alt: 'TrendNow AI Screenshot 2' },
  { type: 'image', src: trendnowai3, alt: 'TrendNow AI Screenshot 3' },
  { type: 'image', src: lsp1, alt: 'LSP Screenshot 1' },
  { type: 'image', src: lsp2, alt: 'LSP Screenshot 2' },
  { type: 'image', src: lsp3, alt: 'LSP Screenshot 3' },
  { type: 'image', src: cost1, alt: 'Cost App Screenshot 1' },
  { type: 'image', src: cost2, alt: 'Cost App Screenshot 2' },
  { type: 'image', src: cost3, alt: 'Cost App Screenshot 3' },
  { type: 'image', src: lurah1, alt: 'Lurah App Screenshot 1' },
  { type: 'image', src: lurah2, alt: 'Lurah App Screenshot 2' },
  { type: 'image', src: lurah3, alt: 'Lurah App Screenshot 3' },
])
</script>
<template>
  <MarqueeContent :data="images" />
</template>