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
    theme: { control: 'select', options: ['light', 'dark'] },
    variant: { control: 'select', options: ['Windows', 'Android', 'iOS'] },
  },
  args: {
    buttonText: 'Click me',
    theme: 'light',
    variant: 'Windows',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Windows: Story = {
  args: {
    buttonText: 'Click me',
    theme: 'light',
    variant: 'Windows',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
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
    theme: 'dark',
    variant: 'Windows',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
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
    theme: 'light',
    variant: 'Android',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
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
    theme: 'dark',
    variant: 'Android',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
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
    theme: 'light',
    variant: 'iOS',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
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
    theme: 'dark',
    variant: 'iOS',
  },
  render: (args) => ({
    components: { DropdownMenu, StoryWrapper },
    setup() {
      const onItemClick = fn();
      return { args, onItemClick };
    },
    template: `
      <StoryWrapper :dark-mode="args.theme === 'dark'" :is-dropdown="true" height="400px">
        <DropdownMenu 
          :button-text="args.buttonText" 
          :theme="args.theme"
          :variant="args.variant"
          @item-click="onItemClick"
        />
      </StoryWrapper>
    `,
  }),
};

