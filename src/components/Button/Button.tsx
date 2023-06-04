import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props: ButtonProps) => props.size === "small" ? "8px 24px" : props.size === "medium" ? "10px 28px" : "12px 32px"};
  color: ${(props: ButtonProps) => (props.primary ? "#1b116e" : "#ffffff")};
  background-color: ${(props: ButtonProps) => (props.primary ? "#6bedb5" : "#1b116e")};
  opacity: ${(props: ButtonProps) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#55bd90" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props: ButtonProps) => props.size === "small" ? "6px 24px" : props.size === "medium" ? "8px 28px" : "10px 32px"};
  }
`;

const Button: React.FC<ButtonProps> = (
    {
        size,
        primary,
        disabled,
        text,
        onClick,
        ...props
    }) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            size={size}
            {...props}>
            {text}
        </StyledButton>
    );
};

export default Button;
