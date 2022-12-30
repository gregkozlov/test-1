import React from "react";

export type InputProps = {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  placeholder?: string;
  onIconClick?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
};
