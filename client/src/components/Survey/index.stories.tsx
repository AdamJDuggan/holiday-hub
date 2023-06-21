// Storybook
import type { Meta, StoryObj } from "@storybook/react";
// Component
import Survey from "./index";
// Mock data
import survey from "../../state/Survey/mockData";

const meta: Meta<typeof Survey> = {
  component: Survey,
};

export default meta;
type Story = StoryObj<typeof Survey>;

export const Default: Story = {
  render: () => <Survey survey={survey} />,
};
