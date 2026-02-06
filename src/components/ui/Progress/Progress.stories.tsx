import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    max: 100,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    max: 100,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    max: 100,
    variant: 'success',
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    value: 45,
    max: 100,
    variant: 'warning',
    showLabel: true,
  },
};

export const Error: Story = {
  args: {
    value: 25,
    max: 100,
    variant: 'error',
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    value: 60,
    max: 100,
    size: 'sm',
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    value: 60,
    max: 100,
    size: 'lg',
    showLabel: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Primary (60%)</p>
        <Progress value={60} variant="primary" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Success (100%)</p>
        <Progress value={100} variant="success" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Warning (45%)</p>
        <Progress value={45} variant="warning" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Error (25%)</p>
        <Progress value={25} variant="error" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Info (80%)</p>
        <Progress value={80} variant="info" showLabel />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Small</p>
        <Progress value={60} size="sm" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Medium</p>
        <Progress value={60} size="md" showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Large</p>
        <Progress value={60} size="lg" showLabel />
      </div>
    </div>
  ),
};
