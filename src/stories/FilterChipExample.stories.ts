import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import FilterChip from './FilterChip.vue';
import StoryWrapper from './StoryWrapper.vue';
import lenovoTabP12Image from '../assets/images/lenovo_tabp12.png';
import lenovoThinkpadImage from '../assets/images/lenovo_thinkpad.png';
import motoEdge60ProImage from '../assets/images/moto_edge_60_pro.png';
import { iconNames } from '../icons/registry';

const images = {
  'lenovo_tabp12.png': lenovoTabP12Image,
  'lenovo_thinkpad.png': lenovoThinkpadImage,
  'moto_edge_60_pro.png': motoEdge60ProImage,
};

const imageNames = Object.keys(images);

// Use the same meta configuration from FilterChip.stories.ts
const meta = {
  title: 'Example/FilterChipExample',
  component: FilterChip,
  tags: ['autodocs'],
  argTypes: {
    text: { 
      control: 'text',
      table: { disable: true },
    },
    variant: { 
      control: 'select', 
      options: ['text-only', 'png-text', 'svg-text'],
      table: { disable: true },
    },
    stage: { 
      control: 'select', 
      options: ['enabled', 'hovered', 'selected'],
      table: { disable: true },
    },
    theme: { control: 'select', options: ['light', 'dark'] },
    imageSrc: { 
      control: 'select', 
      options: imageNames,
      table: { disable: true },
    },
    iconName: { 
      control: 'select', 
      options: iconNames,
      table: { disable: true },
    },
  },
  args: {
    text: 'Changeable Text',
    variant: 'png-text',
    stage: 'enabled',
    theme: 'light',
    imageSrc: 'lenovo_tabp12.png',
    iconName: 'menu',
  },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// FilterChip Usage Example
export const Example: Story = {
  args: {
    text: 'Changeable Text',
    variant: 'png-text',
    stage: 'enabled',
    theme: 'light',
    imageSrc: 'lenovo_tabp12.png',
    iconName: 'menu',
  },
  render: () => ({
    components: { FilterChip, StoryWrapper },
    setup() {
      // Content for each chip - EDIT THESE VALUES:
      const chips = {
        // First row
        row1: {
          textOnly: { text: 'All devices' },
          pngText: [
            { text: 'Lenovo Thinkpad', imageSrc: lenovoThinkpadImage },
            { text: 'motorola edge 60 pro', imageSrc: motoEdge60ProImage },
            { text: 'Lenovo Tab P12', imageSrc: lenovoTabP12Image },
          ],
        },
        // Second row
        row2: {
          textOnly: { text: 'All files' },
          svgText: [
            { text: 'Recent', iconName: 'recent' as const },
            { text: 'Images', iconName: 'images' as const },
            { text: 'Videos', iconName: 'videos' as const },
            { text: 'Documents', iconName: 'documents' as const },
            { text: 'Audio', iconName: 'audio' as const },
            { text: 'Downloads', iconName: 'downloads' as const },
          ],
        },
      };
      
      // Selection state: track which chips are selected
      const allDevicesSelected = ref(false);
      const selectedPngChips = ref<boolean[]>([false, false, false]); // Track 3 PNG chips
      const allFilesSelected = ref(false);
      const selectedSvgChips = ref<boolean[]>([false, false, false, false, false, false]); // Track 6 SVG chips
      
      const handleAllDevicesClick = () => {
        if (allDevicesSelected.value) {
          // Deselect "All devices"
          allDevicesSelected.value = false;
        } else {
          // Select "All devices" and deselect all PNG chips
          allDevicesSelected.value = true;
          selectedPngChips.value = [false, false, false];
        }
      };
      
      const handlePngChipClick = (index: number) => {
        if (selectedPngChips.value[index]) {
          // Deselect this chip
          selectedPngChips.value[index] = false;
        } else {
          // Select this chip and deselect "All devices"
          selectedPngChips.value[index] = true;
          allDevicesSelected.value = false;
        }
      };
      
      const handleAllFilesClick = () => {
        if (allFilesSelected.value) {
          // Deselect "All files"
          allFilesSelected.value = false;
        } else {
          // Select "All files" and deselect all SVG chips
          allFilesSelected.value = true;
          selectedSvgChips.value = [false, false, false, false, false, false];
        }
      };
      
      const handleSvgChipClick = (index: number) => {
        if (selectedSvgChips.value[index]) {
          // Deselect this chip
          selectedSvgChips.value[index] = false;
        } else {
          // Select this chip and deselect "All files"
          selectedSvgChips.value[index] = true;
          allFilesSelected.value = false;
        }
      };
      
      return { 
        chips, 
        allDevicesSelected, 
        selectedPngChips,
        allFilesSelected,
        selectedSvgChips,
        handleAllDevicesClick,
        handlePngChipClick,
        handleAllFilesClick,
        handleSvgChipClick,
      };
    },
    template: `
      <StoryWrapper :dark-mode="false">
        <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
          <!-- First row: 1 text-only + 3 png-text -->
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <FilterChip 
              :text="chips.row1.textOnly.text"
              variant="text-only"
              :stage="allDevicesSelected ? 'selected' : 'enabled'"
              theme="light"
              @click="handleAllDevicesClick"
            />
            <FilterChip
              v-for="(chip, index) in chips.row1.pngText"
              :key="index"
              :text="chip.text"
              variant="png-text"
              :stage="selectedPngChips[index] ? 'selected' : 'enabled'"
              theme="light"
              :image-src="chip.imageSrc"
              @click="handlePngChipClick(index)"
            />
          </div>
          
          <!-- Second row: 1 text-only + 6 svg-text -->
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <FilterChip 
              :text="chips.row2.textOnly.text"
              variant="text-only"
              :stage="allFilesSelected ? 'selected' : 'enabled'"
              theme="light"
              @click="handleAllFilesClick"
            />
            <FilterChip
              v-for="(chip, index) in chips.row2.svgText"
              :key="index"
              :text="chip.text"
              variant="svg-text"
              :stage="selectedSvgChips[index] ? 'selected' : 'enabled'"
              theme="light"
              :icon-name="chip.iconName"
              @click="handleSvgChipClick(index)"
            />
          </div>
        </div>
      </StoryWrapper>
    `,
  }),
};
