import React from "react";
import PropTypes from "prop-types";
// import { MockStore, MockRouter } from "version-one-dev-utils/storybook";

import Icon from ".";

const Stories = {
  title: "Components/Icon",
  component: Icon,
};

export default Stories;

const Story = (args) => (
  // <MockRouter {...args.router}>
  //   <MockStore state={args.state}>
  <Icon {...args.props} />
  //   </MockStore>
  // </MockRouter>
);

export const Default = Story.bind({});
Default.args = {
  router: {},
  state: {},
  props: { icon: "smile" },
};

const DisplayIcon = ({ icon }) => (
  <div className="border-2 p-6 inline text-center m-2">
    <h3 className="mb-4">{icon}</h3>
    <Icon icon={icon} />
  </div>
);

export const All = () => (
  <div className="flex flex-wrap m-36">
    <DisplayIcon icon="h" />
  </div>
);

DisplayIcon.propTypes = {
  icon: PropTypes.string,
};
