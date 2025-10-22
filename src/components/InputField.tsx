import { MdOutlineMail } from "react-icons/md";
import {
    Helper,
    Input,
    InputBox,
    Label,
} from "../styles/components/InputField";
import { InputFieldProps } from "../types/InputProps";
import ButtonToggleVisibility from "./ButtonToggleVisibility";
import { useState } from "react";

const InputField = ({
    label,
    type,
    icon,
    helperText,
    hasControlVisibility,
    disabled,
    max,
    maxLength,
    min,
    minLength,
    name,
    onBlur,
    onChange,
    pattern,
    ref,
    required,
    hasError,
}: InputFieldProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <InputBox $hasError={hasError}>
            <Input
                disabled={disabled}
                max={max}
                maxLength={maxLength}
                min={min}
                minLength={minLength}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                pattern={pattern}
                ref={ref}
                required={required}
                type={isVisible ? type : "text"}
                placeholder=""
                $hasError={hasError}
            />
            <Label>{label}</Label>
            {icon}
            {hasControlVisibility && (
                <ButtonToggleVisibility toggleVisibility={toggleVisibility} />
            )}
            {helperText && <Helper>{helperText}</Helper>}
        </InputBox>
    );
};

InputField.EmailIcon = MdOutlineMail;
InputField.ButtonToggleVisibility = ButtonToggleVisibility;

export default InputField;
