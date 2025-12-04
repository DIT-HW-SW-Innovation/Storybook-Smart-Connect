import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import DropdownMenu from './DropdownMenu.vue';
import StoryWrapper from './StoryWrapper.vue';

const meta = {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    darkMode: { control: 'boolean' },
    variant: { control: 'select', options: ['Windows', 'Android', 'iOS'] },
  },
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'Windows',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Windows: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'Windows',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

export const Windows_DarkMode: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: true,
    variant: 'Windows',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

export const Android: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'Android',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

export const Android_DarkMode: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: true,
    variant: 'Android',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

export const IOS: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'iOS',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

export const IOS_DarkMode: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: true,
    variant: 'iOS',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.darkMode" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

