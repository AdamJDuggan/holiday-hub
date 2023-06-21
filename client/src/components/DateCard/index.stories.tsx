// Storybook
import type { Meta, StoryObj } from "@storybook/react";
// Component
import DateCard from "./index";

const meta: Meta<typeof DateCard> = {
  component: DateCard,
};

export default meta;
type Story = StoryObj<typeof DateCard>;

const date = new Date("August 3, 2024 11:00");

export const Default: Story = {
  render: () => <DateCard date={date} />,
};

export const ShowYear: Story = {
  render: () => <DateCard showYear={true} date={date} />,
};

export const ShowTime: Story = {
  render: () => <DateCard showTime={true} date={date} />,
};

export const ShowYearAndTime: Story = {
  render: () => <DateCard showTime={true} showYear={true} date={date} />,
};

export const EndDate: Story = {
  render: () => (
    <DateCard date={date} endDate={new Date("August 10, 2024 11:00")} />
  ),
};

export const EndDateAndYear: Story = {
  render: () => (
    <DateCard
      showYear={true}
      date={date}
      endDate={new Date("August 10, 2024 11:00")}
    />
  ),
};
export const EndDateAndTime: Story = {
  render: () => (
    <DateCard
      showTime={true}
      date={date}
      endDate={new Date("August 10, 2024 14:30")}
    />
  ),
};
