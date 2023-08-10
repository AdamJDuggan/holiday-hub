// Storybook
import type { Meta, StoryObj } from "@storybook/react";
// Component
import Form from "./index";

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

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
  render: () => <Form data={data} />,
};
