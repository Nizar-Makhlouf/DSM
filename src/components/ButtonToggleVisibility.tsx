import { useState } from "react";
import { ButtonToggleVisibilityProps } from "../types/InputProps";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const ButtonToggleVisibility = ({
    toggleVisibility,
}: ButtonToggleVisibilityProps) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            {isVisible ? (
                <MdOutlineVisibility
                    className="btn-visibility"
                    onClick={() => {
                        toggleVisibility();
                        setIsVisible(!isVisible);
                    }}
                />
            ) : (
                <MdOutlineVisibilityOff
                    className="btn-visibility"
                    onClick={() => {
                        toggleVisibility();
                        setIsVisible(!isVisible);
                    }}
                />
            )}
        </>
    );
};

export default ButtonToggleVisibility;
