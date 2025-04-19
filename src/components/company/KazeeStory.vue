<script setup lang="ts">
import { ref } from 'vue'
import StoryLayout from '@/components/layout/StoryLayout.vue';
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import crm1 from '@/assets/images/company/crm1.png';
import crm2 from '@/assets/images/company/crm2.png';
import medmon1 from '@/assets/images/company/medmon1.png';
import medmon2 from '@/assets/images/company/medmon2.png';
import medmon3 from '@/assets/images/company/medmon3.png';
import trendnowai1 from '@/assets/images/company/trendnowai1.png';
import trendnowai2 from '@/assets/images/company/trendnowai2.png';
import kazee from '@/assets/images/logo-company/kazeelogo.jpeg'
import { useI18n } from 'vue-i18n';

const logo = ref(kazee)
const medmonone = ref([medmon1]);
const medmontwo = ref([medmon2, medmon3]);
const othermedmon = ref([crm1, crm2, trendnowai1, trendnowai2])
const { t } = useI18n();
</script>
<template>
  <div id="kazeestory">
    <NavbarLayout id="kazeestory" label="Kazee" year="2023 - Now" :logo="logo"/>
    <StoryLayout 
      :images="medmonone"
      :labelFigcaption="`${t('kazeestory.figcaption1')} PT Kazee Digital Indonesia`"
    >
      <template #h1>{{ t('kazeestory.h1') }}</template>
      <template #paragraph>
        <p class="mb-4">
          {{ t('kazeestory.paragraph') }}
        </p>
      </template>
    </StoryLayout>
    <StoryLayout 
      :images="medmontwo"
    >
      <template #paragraph>
        <p class="mb-4">{{ t('kazeestory.paragraph1') }}</p>
        <p>{{ t('kazeestory.paragraph2') }}</p>
      </template>
    </StoryLayout>
    <StoryLayout 
      :images="othermedmon"
      :labelFigcaption="`${t('otherImg')} PT Kazee Digital Indonesia`"
    >
      <template #paragraph>
        <p class="mb-4">{{ t('kazeestory.paragraph3') }}</p>
      </template>
    </StoryLayout>
  </div>
</template>