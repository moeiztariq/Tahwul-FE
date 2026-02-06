import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import styles from './Tabs.module.scss';

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  children: React.ReactNode;
}

export const Tabs = forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TabsPrimitive.Root ref={ref} className={clsx(styles.root, className)} {...props}>
        {children}
      </TabsPrimitive.Root>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  children: React.ReactNode;
}

export const TabsList = forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TabsPrimitive.List ref={ref} className={clsx(styles.list, className)} {...props}>
        {children}
      </TabsPrimitive.List>
    );
  }
);

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  children: React.ReactNode;
}

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger ref={ref} className={clsx(styles.trigger, className)} {...props}>
      {children}
    </TabsPrimitive.Trigger>
  );
});

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  children: React.ReactNode;
}

export const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Content ref={ref} className={clsx(styles.content, className)} {...props}>
      {children}
    </TabsPrimitive.Content>
  );
});

TabsContent.displayName = 'TabsContent';
