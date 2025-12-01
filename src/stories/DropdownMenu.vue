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
              <Icon :name="item.icon" size="20" />
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
              <Icon :name="separatorItem.icon" size="20" />
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
import Icon from '../components/Icon.vue';
import type { IconName } from '../icons';
import './dropdown-menu.css';

const props = withDefaults(
  defineProps<{
    buttonText?: string;
    darkMode?: boolean;
    variant?: 'Windows' | 'Android' | 'iOS';
  }>(),
  {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'Windows',
  }
);

type MenuItem = { label: string; icon: IconName };

const emit = defineEmits<{
  (e: 'item-click', item: MenuItem): void;
}>();

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const isMobileVariant = computed(() => props.variant === 'Android' || props.variant === 'iOS');

const menuItems: MenuItem[] = [
  { label: 'Mute notifications', icon: 'notification_off' },
  { label: 'Sync wallpaper', icon: 'wallpaper' },
  { label: 'Settings', icon: 'settings' },
];

const separatorItem: MenuItem = {
  label: 'Unpair device',
  icon: 'link_off',
};

const hasSeparator = true;

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item: MenuItem) => {
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

