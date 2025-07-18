<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = withDefaults(
  defineProps<{
    label: string;
    icon?: string;
    useIconify?: boolean;
    useSvg?: boolean;
    svg?: string;
    borderWidth?: string;
    reverse?: boolean;
  }>(),
  {
    useSvg: false,
    reverse: false,
    borderWidth: '1px'
  }
)

</script>
<template>
  <div class="tag-container" :class="{ 'flex-row-reverse': reverse }">
    <span v-if="icon" class="icon">
      <Icon v-if="useIconify" :icon="icon" width="16" height="16" />
      <span v-else>{{ icon }}</span>
    </span>
    <span v-if="svg" class="icon">
      <img v-if="useSvg" :src="svg" />
    </span>
    <span class="label text-white font-bold">{{ label }}</span>
  </div>
</template>

<style scoped>
.tag-container {
  border: v-bind('props.borderWidth') solid rgba(255, 255, 255, 0.08);
  background-color: #0d0d0d;
  border-radius: 28px;
  height: 1.8rem;
  padding: 0.3rem 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: -moz-max-content;
  width: max-content;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 18px;
    height: 18px;
  }
}

.label {
  font-size: 0.7em;
}
</style>