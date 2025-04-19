<script setup lang="ts">
import { ref } from 'vue'
import StoryLayout from '@/components/layout/StoryLayout.vue';
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import lsp1 from '@/assets/images/company/lsp1.png';
import lsp2 from '@/assets/images/company/lsp2.png';
import cost3 from '@/assets/images/company/cost3.png';
import lurah2 from '@/assets/images/company/lurah2.png';
import smi from '@/assets/images/logo-company/smi.jpeg'
import { useI18n } from 'vue-i18n';

const logo = ref(smi);
const { t } = useI18n();
const lspimage = ref([lsp1, lsp2, cost3, lurah2]);
</script>
<template>
  <div id="suryamicrosystemsstory">
    <NavbarLayout id="suryamicrosystemsstory" label="Surya Microsystems"  year="2023"  :logo="logo"/>
    <StoryLayout 
      :images="lspimage"
      multiple
      :labelFigcaption="`${t('otherImg')} PT Surya Microsystems`"
    >
    <template #h1>{{ t('smistory.h1') }}</template>
    <template #paragraph>
      <p class="mb-4">{{ t('smistory.paragraph1') }}</p>
      <p class="mb-4">{{ t('smistory.paragraph2') }}</p>
      <p>{{ t('smistory.paragraph3') }}</p>
    </template>
    </StoryLayout>
  </div>
</template>