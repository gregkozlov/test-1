import React from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export type TextProps = {
  size?: "small" | "medium" | "large" | "extra-large";
  children: JSX.Element | string;
  onClick?: () => void;
  color?: Color;
  bold?: boolean;
  align?: "left" | "right" | "center";
};
