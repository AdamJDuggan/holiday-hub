// React
import React from "react";
// Components
import Icon from "../Icon/index.js";

export default function LogoIcon() {
  return (
    <div className="relative text-white flex space-x-3 p-4">
      <Icon icon="h" size="lg" className="absolute top-0 left-0" />
      <Icon icon="h" size="lg" className="absolute bottom-0 right-0" />
    </div>
  );
}
