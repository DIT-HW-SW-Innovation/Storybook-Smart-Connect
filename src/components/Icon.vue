<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue';
import { iconRegistry, type IconName } from '../icons/registry';

interface Props {
  name: IconName;
  size?: number | string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  className: '',
});

const iconContainerRef = ref<HTMLElement | null>(null);
const iconSvg = computed(() => {
  const svg = iconRegistry[props.name];
  return svg || '';
});

const sizeValue = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`;
  }
  return props.size;
});

const iconClass = computed(() => {
  return ['icon', props.className].filter(Boolean).join(' ');
});

// Safely inject SVG after component is mounted
const injectIcon = () => {
  if (!iconContainerRef.value) {
    return;
  }
  
  const svgContent = iconSvg.value;
  
  // Clear existing content
  iconContainerRef.value.innerHTML = '';
  
  // Only inject if we have valid SVG content
  if (svgContent && typeof svgContent === 'string' && svgContent.trim()) {
    try {
      iconContainerRef.value.innerHTML = svgContent;
    } catch (error) {
      console.warn(`Failed to render icon: ${props.name}`, error);
    }
  } else {
    console.warn(`Icon not found or invalid: ${props.name}`);
  }
};

onMounted(async () => {
  // Use nextTick to ensure DOM is fully ready
  await nextTick();
  injectIcon();
});

// Watch for changes to icon name
watch(() => props.name, () => {
  injectIcon();
}, { immediate: false });
</script>

<template>
  <span
    ref="iconContainerRef"
    :class="iconClass"
    :style="{ width: sizeValue, height: sizeValue, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }"
  />
</template>

<style scoped>
.icon {
  line-height: 0;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

