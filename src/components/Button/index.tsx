import { IButtonProps } from "@/interfaces/components/Button";
import React from "react";

import { StyledButton } from "@/styles/Button";

const Button: React.FC<IButtonProps> = ({
  children,
  label,
  variant,
  type,
  onClick,
  ...rest
}: IButtonProps) => (
  <StyledButton variant={variant} {...rest} type={type} onClick={onClick}>
    {children}
    {label}
  </StyledButton>
);

Button.defaultProps = {
  variant: "contained",
  onClick: () => null,
  className: "",
  disabled: false,
};

export default Button;
