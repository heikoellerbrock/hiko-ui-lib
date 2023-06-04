import { ChangeEventHandler } from "react";

export interface InputProps {
    id?: string | undefined;
    label?: string | undefined;
    error?: boolean | undefined;
    message?: string | undefined;
    success?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
