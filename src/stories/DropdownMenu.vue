<template>
  <div
    class="dropdown-container"
    :class="{ 'dropdown-container--dark': darkMode }"
  >
    <div ref="containerRef" class="dropdown-wrapper">
      <button 
        type="button" 
        class="dropdown-trigger"
        @click.stop="toggleDropdown"
      >
        {{ buttonText }}
      </button>
      <div 
        v-if="isOpen" 
        class="dropdown-menu"
        :class="{ 
          'dropdown-menu--dark': darkMode,
          'dropdown-menu--android-ios': isMobileVariant
        }"
        @click.stop
      >
      <div class="menu-list">
        <div 
          v-for="(item, index) in menuItems" 
          :key="index"
          class="menu-item"
          :class="{ 'menu-item--android-ios': isMobileVariant }"
          @click.stop="handleItemClick(item)"
        >
          <div class="menu-item-content">
            <div class="menu-item-icon">
              <img :src="item.icon" :alt="item.label" />
            </div>
            <div class="menu-item-text">
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
        <div v-if="hasSeparator" class="menu-separator"></div>
        <div 
          class="menu-item"
          :class="{ 'menu-item--android-ios': isMobileVariant }"
          @click.stop="handleItemClick(separatorItem)"
        >
          <div class="menu-item-content">
            <div class="menu-item-icon">
              <img :src="separatorItem.icon" :alt="separatorItem.label" />
            </div>
            <div class="menu-item-text">
              <p>{{ separatorItem.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import './dropdown-menu.css';

const img1 = "http://localhost:3845/assets/bb613a71598a9471658acedc84f40541221978c1.svg";
const img2 = "http://localhost:3845/assets/e69baa7f21dac4bd50718e9a134c936dea8ab1f6.svg";
const img3 = "http://localhost:3845/assets/65a88b5aab1e8151a788ac4c1a512eaa63ff704c.svg";
const img4 = "http://localhost:3845/assets/31b6aa5b6bd4cb1cd23e2f9148b77665d3f081e1.svg";

const props = withDefaults(
  defineProps<{
    buttonText?: string;
    darkMode?: boolean;
    variant?: 'PC' | 'Android' | 'iOS';
  }>(),
  {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'PC',
  }
);

const emit = defineEmits<{
  (e: 'item-click', item: { label: string; icon: string }): void;
}>();

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const isMobileVariant = computed(() => props.variant === 'Android' || props.variant === 'iOS');

const menuItems = [
  { label: 'Mute notifications', icon: img1 },
  { label: 'Sync wallpaper', icon: img2 },
  { label: 'Settings', icon: img3 },
];

const separatorItem = {
  label: 'Unpair device',
  icon: img4,
};

const hasSeparator = true;

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item: { label: string; icon: string }) => {
  emit('item-click', item);
  isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (containerRef.value && !containerRef.value.contains(target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

