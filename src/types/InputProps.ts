import zod from "zod";
import { loginSchema } from "../schemas/loginSchema";

export interface InputProps {
    $hasError?: boolean | undefined;
}

export interface InputFieldProps {
    label: string;
    type?: string;
    icon?: React.ReactNode;
    helperText?: string;
    hasControlVisibility?: boolean;
    disabled?: boolean | undefined;
    max?: string | number | undefined;
    maxLength?: number | undefined;
    min?: string | number | undefined;
    minLength?: number | undefined;
    name?: string | undefined;
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    pattern?: string | undefined;
    ref?: React.Ref<HTMLInputElement> | undefined;
    required?: boolean | undefined;
    hasError?: boolean | undefined;
}

export interface ButtonToggleVisibilityProps {
    toggleVisibility: () => void;
}

export type LoginInputs = zod.infer<typeof loginSchema>;
