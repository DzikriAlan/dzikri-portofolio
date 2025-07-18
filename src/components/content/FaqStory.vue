<script setup lang="ts">
import NavbarLayout from '@/components/layout/NavbarLayout.vue';
import AccordionFaq from '@/components/reusable/AccordionFaq.vue';
</script>
<template>
  <div id="faq" style="margin-top: 1px;">
    <NavbarLayout id="faq" label="FAQ"/>
    <div class="w-full md:w-[90%] lg:w-4/5 xl:w-2/3 mx-auto bg-black text-white p-4 pt-0 md:p-6 lg:p-8">
      <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-center mx-auto mb-5">
        <AccordionFaq />
      </div>
    </div>
  </div>
</template>