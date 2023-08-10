// 3rd party
import classnames from "classnames";
// Components
import Icon from "../Icon/index.js";
// Styles
import style from "./style.scss";

interface Props {
  type: "button" | "submit";
  kind: "primary" | "secondary";
  label: string;
  href?: string;
  className?: string;
  styles?: object;
  size?: "sm" | "md" | "lg";
  pending?: boolean;
  disabled?: boolean;
  onClick(): Promise<void> | Event;
}

export default function Button(props: Props) {
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

  const classes = classnames(
    style,
    kind,
    size,
    "button shadow-xl relative",
    disabled && "opacity-75 cursor-not-allowed",
    pending && "opacity-90 cursor-progress",
    className
  );
  if (href)
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      <span className={classnames(pending && "opacity-0")}>{label}</span>
      {pending && (
        <div className="absolute grid place-items-center h-full w-full">
          <Icon
            icon="spinner"
            className="relative animate-spin absolute inset-0"
          />
        </div>
      )}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  kind: "primary",
  size: "md",
  onClick: () => alert("Set button onClick"),
};
