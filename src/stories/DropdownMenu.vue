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
          <template v-for="(entry, index) in menuEntries" :key="entry.kind === 'item' ? entry.label : `separator-${index}`">
            <div v-if="entry.kind === 'separator'" class="menu-separator"></div>
            <div
              v-else
              class="menu-item"
              :class="{
                'menu-item--android-ios': isMobileVariant,
                'menu-item--selected': selectedItem === entry.label,
                'menu-item--disabled': entry.disabled
              }"
              :aria-disabled="entry.disabled || undefined"
              @click.stop="handleItemClick(entry)"
            >
              <div class="menu-item-content">
                <div class="menu-item-icon">
                  <img :src="entry.icon" :alt="entry.label" />
                </div>
                <div class="menu-item-text">
                  <p>{{ entry.label }}</p>
                </div>
              </div>
            </div>
          </template>
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

type MenuEntry =
  | {
      kind: 'item';
      label: string;
      icon: string;
      disabled?: boolean;
    }
  | {
      kind: 'separator';
    };

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

const menuEntries: MenuEntry[] = [
  { kind: 'item', label: 'Mute notifications', icon: img1 },
  { kind: 'item', label: 'Sync wallpaper', icon: img2 },
  { kind: 'item', label: 'Settings', icon: img3 },
  { kind: 'separator' },
  { kind: 'item', label: 'Unpair device', icon: img4, disabled: true },
];

const selectedItem = ref<string | null>(
  menuEntries.find((entry): entry is Extract<MenuEntry, { kind: 'item' }> => entry.kind === 'item')?.label ?? null
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (entry: MenuEntry) => {
  if (entry.kind !== 'item' || entry.disabled) {
    return;
  }

  selectedItem.value = entry.label;
  emit('item-click', { label: entry.label, icon: entry.icon });
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

