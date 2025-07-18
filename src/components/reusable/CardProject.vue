<script setup>
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, watch } from 'vue';
const { t } = useI18n();
const props = defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  techStack: { type: Array, required: true }
});

const titleRef = ref(null);
const isSingleLine = ref(true);

const checkTitleLines = () => {
  if (titleRef.value) {
    const el = titleRef.value;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
    const lines = Math.round(el.scrollHeight / lineHeight);
    isSingleLine.value = lines <= 1;
  }
};

onMounted(() => {
  checkTitleLines();
});
watch(() => t(props.title), () => {
  checkTitleLines();
});
</script>

<template>
  <v-card class="text-white rounded-lg overflow-hidden neon-shadow-card card-fixed-height" max-width="350">
    <v-carousel
      v-if="images.length > 0"
      height="200"
      hide-delimiter-background
      show-arrows="hover"
      class="rounded-t-lg image-carousel-container"
    >
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        class="rounded-t-lg"
      >
        <div class="image-container">
          <img 
            :src="image" 
            :alt="`Image ${index + 1}`"
            class="carousel-image"
          />
        </div>
      </v-carousel-item>
    </v-carousel>

    <v-card-text class="p-4 content-fixed-height">
      <div class="content-wrapper">
        <h3
          ref="titleRef"
          class="font-bold text-white mb-2"
          style="font-size: 1rem;"
        >
          {{ t(title) }}
        </h3>
        
        <div class="text-gray-300 my-4" style="font-size: 0.8rem;">
          {{ t(subtitle) }}
        </div>
      </div>
      
      <div class="tech-stack-container">
        <h4 class="text-xs font-semibold text-gray-400 mb-2">Tech Stack:</h4>
        <div class="flex flex-wrap gap-1">
          <div 
            v-for="tech in techStack" 
            :key="tech.name"
            class="border border-gray-300 rounded py-2"
          >
            <span class="icon">
              <img :src="tech.icon" />
            </span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Card Fixed Height */
.card-fixed-height {
  height: 480px !important;
  display: flex !important;
  flex-direction: column !important;
}

.content-fixed-height {
  height: 280px !important;
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}

.content-wrapper {
  flex-grow: 1;
}

.title-fixed-height {
  height: 2.5rem !important;
  line-height: 1.25rem !important;
}




.tech-stack-container {
}

:deep(.v-carousel) {
  height: 200px !important;
  min-height: 200px !important;
}

:deep(.v-window) {
  height: 200px !important;
  min-height: 200px !important;
}

:deep(.v-window__container) {
  height: 200px !important;
  min-height: 200px !important;
}

:deep(.v-carousel-item) {
  height: 200px !important;
  min-height: 200px !important;
}

.image-container {
  width: 100%;
  height: 200px !important;
  min-height: 200px !important;
  max-height: 200px !important;
  position: relative;
  overflow: hidden;
  background-color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Neon Shadow Card */
.neon-shadow-card {
  background: linear-gradient(145deg, #0a0a0a, #1a1a1a, #000000);
  box-shadow: 
    0 0 20px rgba(156, 163, 175, 0.15),
    0 0 40px rgba(156, 163, 175, 0.1),
    0 0 60px rgba(156, 163, 175, 0.05),
    0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(156, 163, 175, 0.1);
  position: relative;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
  }
}

.neon-shadow-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, 
    rgba(156, 163, 175, 0.05) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(156, 163, 175, 0.03) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.neon-shadow-card > * {
  position: relative;
  z-index: 1;
}

/* Custom carousel styles */
:deep(.v-carousel__controls) {
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 0;
}

:deep(.v-carousel__controls .v-btn) {
  color: white;
  width: 8px !important;
  height: 8px !important;
  min-width: 8px !important;
  min-height: 8px !important;
  margin: 0 2px;
}

:deep(.v-carousel__controls .v-btn .v-btn__content) {
  font-size: 6px;
}

:deep(.v-window__right),
:deep(.v-window__left) {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 1.5rem !important;
  height: 1.5rem !important;
  min-width: 1.5rem;
}

:deep(.v-window__right .v-btn__content),
:deep(.v-window__left .v-btn__content) {
  font-size: 8px;
}

:deep(.v-window__right .v-icon),
:deep(.v-window__left .v-icon) {
  font-size: 18px !important;
}

:deep(.v-window__right):hover,
:deep(.v-window__left):hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
