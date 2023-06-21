// Storybook
import type { Meta, StoryObj } from "@storybook/react";
// Component
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button label="Hello" />,
};

export const Pending: Story = {
  render: () => <Button label="Hello" pending={true} />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Hello" />,
};

export const Disabled: Story = {
  render: () => <Button label="Hello" disabled={true} />,
};
