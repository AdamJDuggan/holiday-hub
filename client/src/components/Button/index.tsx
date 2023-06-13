// React
import React from "react";
import PropTypes from "prop-types";
// 3rd party
import classnames from "classnames";
// Components
import Icon from "../Icon/index.js";
// Styles
import style from "./style.scss";

export default function Button(props: any) {
  const {
    type,
    kind,
    label,
    href,
    className,
    size,
    pending,
    disabled,
    onClick,
  } = props;

  const classes = [
    style,
    kind,
    size,
    "button shadow-xl relative",
    disabled && "opacity-80, pointer-events-none",
    pending && "opacity-90 cursor-progress",
    className,
  ];

  if (href)
    return (
      <a href={href} className={classnames(...classes)}>
        {label}
      </a>
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(...classes)}
      disabled={disabled}
    >
      <span className={classnames(pending && "opacity-0")}>{label}</span>
      {pending && (
        <div className="absolute grid place-items-center h-full w-full">
          {" "}
          <Icon
            icon="spinner"
            className="relative animate-spin absolute inset-0"
          />
        </div>
      )}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  kind: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  pending: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  kind: "primary",
  size: "md",
  className: "",
  pending: false,
  onClick: () => alert("Set button onClick"),
};
