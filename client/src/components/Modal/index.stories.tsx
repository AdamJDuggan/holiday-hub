// Storybook
import type { Meta, StoryObj } from "@storybook/react";
// Component
import Modal from "./index";

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const data = {
  mode: "onChange",
  values: {
    name: {
      defaultValue: "HERE",
      type: "string",
      required: true,
    },
    age: {
      defaultValue: 29,
      type: "number",
      required: false,
    },
  },
  onSubmit: (values: object) => console.log(values),
};

export const Default: Story = {
  render: () => <Modal data={data} />,
};
