<template>
  <div
    class="filter-chip"
    :class="{
      'filter-chip--dark': theme === 'dark',
      'filter-chip--enabled': currentStage === 'enabled',
      'filter-chip--hovered': currentStage === 'hovered',
      'filter-chip--selected': currentStage === 'selected',
      'filter-chip--text-only': variant === 'text-only',
      'filter-chip--png-text': variant === 'png-text',
      'filter-chip--svg-text': variant === 'svg-text',
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <img 
      v-if="variant === 'png-text' && imageSrc" 
      :src="imageSrc" 
      :alt="text"
      class="filter-chip__image"
    />
    <div 
      v-if="variant === 'svg-text' && iconName" 
      class="filter-chip__icon"
    >
      <Icon :name="iconName" size="1rem" />
    </div>
    <span class="filter-chip__text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import Icon from '../components/Icon.vue';
import type { IconName } from '../icons';
import './filter-chip.css';

interface Props {
  text: string;
  variant?: 'text-only' | 'png-text' | 'svg-text';
  stage?: 'enabled' | 'hovered' | 'selected';
  theme?: 'light' | 'dark';
  imageSrc?: string;
  iconName?: IconName;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text-only',
  stage: 'enabled',
  theme: 'light',
});

type Stage = 'enabled' | 'hovered' | 'selected';

const currentStage = ref<Stage>(props.stage);
const isHovered = ref(false);

// Watch for prop changes (for Storybook controls)
watch(() => props.stage, (newStage) => {
  currentStage.value = newStage;
});

const handleMouseEnter = () => {
  isHovered.value = true;
  // Only show hovered state if we're in enabled state
  if (currentStage.value === 'enabled') {
    currentStage.value = 'hovered';
  }
};

const handleMouseLeave = () => {
  isHovered.value = false;
  // Return to enabled state only if we were in hovered state (not selected)
  if (currentStage.value === 'hovered') {
    currentStage.value = 'enabled';
  }
};

const handleClick = () => {
  if (currentStage.value === 'selected') {
    // Clicking selected -> enabled
    currentStage.value = 'enabled';
  } else if (currentStage.value === 'enabled' || currentStage.value === 'hovered') {
    // Clicking enabled or hovered -> selected
    currentStage.value = 'selected';
  }
};
</script>

