<template>
  <div
    class="story-wrapper"
    :style="{
      padding: '40px',
      background: darkMode ? '#0f1116' : '#f5f6fb'
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    darkMode?: boolean;
  }>(),
  {
    darkMode: false,
  }
);
</script>

