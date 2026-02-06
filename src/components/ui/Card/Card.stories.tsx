import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import { Badge } from '../Badge';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        This is a default card component with standard styling.
      </CardContent>
    </Card>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Card variant="bordered">
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
      </CardHeader>
      <CardContent>
        This card has a thicker border to emphasize its boundaries.
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>
        This card has a shadow and appears elevated from the page.
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        This card includes a footer section for actions or additional information.
      </CardContent>
      <CardFooter>
        <button style={{ padding: '8px 16px' }}>Cancel</button>
        <button style={{ padding: '8px 16px' }}>Confirm</button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Strategic Initiative Q1 2026</CardTitle>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardContent>
        This card combines a title with a status badge in the header.
      </CardContent>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding="none">
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
        <h3 style={{ margin: 0 }}>Custom Padding</h3>
      </div>
      <div style={{ padding: '16px' }}>
        This card has no default padding, allowing full control over internal spacing.
      </div>
    </Card>
  ),
};

export const SmallPadding: Story = {
  render: () => (
    <Card padding="sm">
      <CardTitle>Compact Card</CardTitle>
      <CardContent>
        This card uses smaller padding for more compact layouts.
      </CardContent>
    </Card>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <Card padding="lg">
      <CardTitle>Spacious Card</CardTitle>
      <CardContent>
        This card uses larger padding for more breathing room.
      </CardContent>
    </Card>
  ),
};
