import React from "react";
export interface IButtonProps {
    children?:React.ReactNode | string
    variant?: 'contained' | 'text' | 'outline' | 'transparent' |'cancel' | 'block'
    type: 'button' | 'submit' | 'reset'
    onClick?: () => void
    className?: string
    label?: string
    disabled?: boolean;
  }
  export interface IStyledButton extends React.HTMLProps<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outline' | 'transparent' |'cancel' | 'block'
  }