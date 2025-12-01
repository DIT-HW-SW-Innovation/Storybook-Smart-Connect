<script setup lang="ts">
import { computed } from 'vue';
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

const iconSvg = computed(() => iconRegistry[props.name]);

const sizeValue = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`;
  }
  return props.size;
});

const iconClass = computed(() => {
  return ['icon', props.className].filter(Boolean).join(' ');
});
</script>

<template>
  <span
    :class="iconClass"
    :style="{ width: sizeValue, height: sizeValue, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }"
    v-html="iconSvg"
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

