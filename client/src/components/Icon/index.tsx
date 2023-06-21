// React
import React from "react";
import PropTypes from "prop-types";
//3rd party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleCheck,
  faH,
  faSpinner,
  faCheck,
  faXmark,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  check: faCircleCheck,
  cross: faXmark,
  h: faH,
  spinner: faSpinner,
  tick: faCheck,
  question: faQuestion,
};

const Icon = (props: any) => {
  const { icon, className, size, color, onClick } = props;
  return icons[icon] ? (
    <FontAwesomeIcon
      icon={icons[icon]}
      className={className}
      size={size}
      color={color}
      onClick={onClick}
    />
  ) : null;
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
