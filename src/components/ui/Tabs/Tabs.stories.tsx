import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Card, CardContent } from '../Card';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Analytics</TabsTrigger>
        <TabsTrigger value="tab3">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Analytics content goes here.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Reports content goes here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="dashboard">
      <TabsList>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="planning">Strategic Planning</TabsTrigger>
        <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <Card>
          <CardContent>
            <h3>Dashboard Overview</h3>
            <p>View your key metrics and performance indicators here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="planning">
        <Card>
          <CardContent>
            <h3>Strategic Planning</h3>
            <p>Plan and manage your strategic initiatives.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tracking">
        <Card>
          <CardContent>
            <h3>Progress Tracking</h3>
            <p>Monitor the progress of your initiatives and objectives.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger value="1">Financial</TabsTrigger>
        <TabsTrigger value="2">Customer</TabsTrigger>
        <TabsTrigger value="3">Internal Process</TabsTrigger>
        <TabsTrigger value="4">Learning & Growth</TabsTrigger>
        <TabsTrigger value="5">Innovation</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <p>Financial perspective content.</p>
      </TabsContent>
      <TabsContent value="2">
        <p>Customer perspective content.</p>
      </TabsContent>
      <TabsContent value="3">
        <p>Internal process perspective content.</p>
      </TabsContent>
      <TabsContent value="4">
        <p>Learning and growth perspective content.</p>
      </TabsContent>
      <TabsContent value="5">
        <p>Innovation perspective content.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Another Active</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>This tab is active and accessible.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>This tab is disabled and cannot be selected.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>This tab is also active and accessible.</p>
      </TabsContent>
    </Tabs>
  ),
};
