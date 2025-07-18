<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const openPanels = ref([])

const faqData = [
  {
    id: 'panel-1',
    question: 'faq.first.question',
    answer: [ 'faq.first.answer.paragraph1', 'faq.first.answer.paragraph2', 'faq.first.answer.paragraph3' ]
  },
  {
    id: 'panel-2', 
    question: 'faq.second.question',
    answer: [ 'faq.second.answer.paragraph1' ]
  },
  {
    id: 'panel-3',
    question: 'faq.third.question',
    answer: [ 'faq.third.answer.paragraph1' ]
  }
]
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <v-expansion-panels
      v-model="openPanels"
      multiple
      variant="accordion"
      class="accordion-faq"
    >
      <v-expansion-panel
        v-for="faq in faqData"
        :key="faq.id"
        :value="faq.id"
        class="faq-panel mb-2 rounded-lg overflow-hidden"
      >
        <v-expansion-panel-title class="faq-title px-6 py-4 text-white font-medium text-base">
          <div class="flex items-center justify-between w-full">
            <span class="flex-1 text-left">{{ t(faq.question) }}</span>
          </div>
        </v-expansion-panel-title>
        
        <v-expansion-panel-text class="faq-content px-6 py-4">
          <div class="text-gray-300 text-sm leading-relaxed">
            <template v-for="(paragraph, idx) in faq.answer" :key="idx">
              <p class="mb-2">{{ t(paragraph) }}</p>
            </template>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.accordion-faq {
  background: transparent !important;
}

.faq-panel {
  background: linear-gradient(145deg, #000000, #0a0a0a, #000000) !important;
  border: 1px solid rgba(40, 40, 40, 0.4) !important;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.5),
    0 2px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
  margin-bottom: 8px !important;
}

:deep(.v-expansion-panel) {
  background: linear-gradient(145deg, #000000, #0a0a0a, #000000) !important;
  border: 1px solid rgba(40, 40, 40, 0.4) !important;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.5),
    0 2px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}

:deep(.v-expansion-panel-title) {
  background: linear-gradient(145deg, #000000, #0a0a0a, #000000) !important;
  color: white !important;
  font-weight: 500 !important;
  border-bottom: 1px solid rgba(40, 40, 40, 0.3) !important;
  min-height: 60px !important;
}

:deep(.v-expansion-panel-title:hover) {
  background: linear-gradient(145deg, #0a0a0a, #1a1a1a, #0a0a0a) !important;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}

:deep(.v-expansion-panel-title__overlay) {
  display: none !important;
}

:deep(.v-expansion-panel-text__wrapper) {
  background: linear-gradient(145deg, #000000, #050505, #000000) !important;
  padding: 0 !important;
}

:deep(.v-expansion-panel-text) {
  color: #d1d5db !important;
}

.faq-title {
  transition: all 0.2s ease-in-out;
}

.faq-content {
  background: linear-gradient(145deg, #000000, #050505, #000000) !important;
}

/* Custom chevron rotation */
.rotate-180 {
  transform: rotate(180deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  :deep(.v-expansion-panel-title) {
    min-height: 50px !important;
    padding: 12px 16px !important;
  }
  
  .faq-title {
    font-size: 14px !important;
  }
  
  .faq-content {
    padding: 16px !important;
  }
}
</style>
