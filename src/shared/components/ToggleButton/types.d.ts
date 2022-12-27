type ToggleType = {
  onClick: (isToggled: boolean) => void;
  label?: string;
  toggled: boolean;
  rightPlaceholeder?: React.ReactNode;
  leftPlaceholder?: React.ReactNode;
};
