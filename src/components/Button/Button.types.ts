import { MouseEventHandler } from "react";

export interface ButtonProps {
    text?: string | undefined;
    primary?: boolean | undefined;
    disabled?: boolean | undefined;
    size?: "small" | "medium" | "large" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
