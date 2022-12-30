import React from "react";

export type InputProps = {
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "email" | "tel" | "date";
  disabled?: boolean;
  placeholder?: string;
  errors?: string | null;
  onIconClick?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
};
