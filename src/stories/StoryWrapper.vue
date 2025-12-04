<template>
  <div
    class="story-wrapper"
    :class="{ 
      'story-wrapper--dark': darkMode,
      'story-wrapper--dropdown': isDropdown
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
  }>(),
  {
    darkMode: false,
    isDropdown: false,
    height: 'auto',
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
  box-sizing: border-box;
}

.story-wrapper--dark {
  background: #0f1116;
}

.story-wrapper--dropdown {
  align-items: flex-start;
  padding-top: 40px;
}
</style>

