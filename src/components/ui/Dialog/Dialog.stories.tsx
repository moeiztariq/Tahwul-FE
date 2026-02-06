import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of what the dialog is about.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '24px' }}>
          <p>Dialog content goes here.</p>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Open Dialog with Footer</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed with this action?
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '24px' }}>
          <p>This action cannot be undone.</p>
        </div>
        <DialogFooter>
          <button style={{ padding: '8px 16px' }}>Cancel</button>
          <button style={{ padding: '8px 16px', background: '#0ea5e9', color: 'white', border: 'none' }}>
            Confirm
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Open Small Dialog</button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Small Dialog</DialogTitle>
        </DialogHeader>
        <div style={{ padding: '24px' }}>
          <p>This is a small dialog.</p>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Open Large Dialog</button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>
            This dialog has more space for content.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '24px' }}>
          <p>This is a large dialog with more content space.</p>
          <p>You can add forms, tables, or other complex content here.</p>
        </div>
        <DialogFooter>
          <button style={{ padding: '8px 16px' }}>Cancel</button>
          <button style={{ padding: '8px 16px' }}>Save</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Create New Initiative</button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Create New Initiative</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new strategic initiative.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
              Initiative Name
            </label>
            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
              Description
            </label>
            <textarea
              rows={4}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
            />
          </div>
        </div>
        <DialogFooter>
          <button style={{ padding: '8px 16px' }}>Cancel</button>
          <button style={{ padding: '8px 16px', background: '#0ea5e9', color: 'white', border: 'none' }}>
            Create
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
