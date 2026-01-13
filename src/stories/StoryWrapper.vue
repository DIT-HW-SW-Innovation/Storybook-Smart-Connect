<template>
  <div
    class="story-wrapper"
    :class="{ 
      'story-wrapper--dark': darkMode,
      'story-wrapper--dropdown': isDropdown,
      'story-wrapper--large': large
    }"
    :style="dropdownStyle"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    darkMode?: boolean;
    isDropdown?: boolean;
    height?: string;
    large?: boolean;
  }>(),
  {
    darkMode: false,
    isDropdown: false,
    height: 'auto',
    large: false,
  }
);

const dropdownStyle = computed(() => {
  if (props.isDropdown) {
    return {
      height: props.height || '400px',
    };
  }
  return {};
});
</script>

<style scoped>
.story-wrapper {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #f5f6fb;
  box-sizing: border-box;
}

.story-wrapper--dark {
  background: #0f1116;
}

.story-wrapper--dropdown {
  align-items: flex-start;
  padding-top: 40px;
}

.story-wrapper--large {
  min-width: 800px;
  min-height: 200px;
  align-items: flex-start;
  padding: 60px;
}
</style>

