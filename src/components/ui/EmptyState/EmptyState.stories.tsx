import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'UI/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No data available',
    description: 'There is currently no data to display.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem' }}>📊</span>,
    title: 'No initiatives found',
    description: 'Start by creating your first strategic initiative.',
  },
};

export const WithAction: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem' }}>➕</span>,
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    action: (
      <button style={{ padding: '8px 16px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Create Project
      </button>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    icon: <span>📭</span>,
    title: 'No messages',
    description: 'Your inbox is empty.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: <span style={{ fontSize: '3rem' }}>🔍</span>,
    title: 'No search results',
    description: 'We couldn\'t find any results matching your search criteria. Try adjusting your filters or search terms.',
    action: (
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Clear Filters</button>
    ),
  },
};

export const NoResults: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem' }}>🔎</span>,
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
    action: (
      <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Reset Filters</button>
    ),
  },
};

export const EmptyDashboard: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem' }}>📈</span>,
    title: 'Welcome to your dashboard',
    description: 'Set up your first strategic initiative to start tracking your organization\'s progress.',
    action: (
      <button style={{ padding: '10px 20px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Get Started
      </button>
    ),
  },
};

export const NetworkError: Story = {
  args: {
    icon: <span style={{ fontSize: '2rem' }}>⚠️</span>,
    title: 'Unable to load data',
    description: 'We encountered an error while loading your data. Please try again.',
    action: (
      <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Retry</button>
    ),
  },
};
