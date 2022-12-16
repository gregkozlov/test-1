import React from "react";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  styletype?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  border?: boolean;
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};
