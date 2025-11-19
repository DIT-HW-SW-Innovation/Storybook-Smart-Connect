import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import DropdownMenu from './DropdownMenu.vue';

const meta = {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    darkMode: { control: 'boolean' },
    variant: { control: 'select', options: ['PC', 'Android', 'iOS'] },
  },
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'PC',
    onItemClick: fn(),
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: false,
    variant: 'PC',
  },
  render: (args) => ({
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
    `,
  }),
};

export const PC_DarkMode: Story = {
  args: {
    buttonText: 'Click me',
    darkMode: true,
    variant: 'PC',
  },
  render: (args) => ({
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
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
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
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
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
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
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
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
    components: { DropdownMenu },
    setup() {
      return { args };
    },
    template: `
      <div
        :style="{
          padding: '40px',
          minHeight: '250px',
          background: args.darkMode ? '#0f1116' : '#f5f6fb'
        }"
      >
        <DropdownMenu 
          :button-text="args.buttonText" 
          :dark-mode="args.darkMode"
          :variant="args.variant"
          @item-click="args.onItemClick"
        />
      </div>
    `,
  }),
};

