import styled from "styled-components";
import { InputProps } from "../../types/InputProps";
import { zoomOut } from "../animations/ButtonAnimation";

export const InputBox = styled.div<InputProps>`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 420px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    &:has(p:not(:empty)) {
        margin-bottom: 15px;
    }
    &:has(svg) Input {
        padding-right: 2rem;
    }
    & Svg {
        position: absolute;
        right: 10px;
        font-size: 1.3rem;
        color: ${(props) => (props.$hasError ? "red" : "#808080")};
        /* cursor: pointer; */
    }
    & .btn-visibility {
        cursor: pointer;
        color: ${(props) => (props.$hasError ? "red" : "#808080")};
        animation: ${zoomOut} 0.3s linear;
    }
    & .btn-visibility:active,
    & .btn-visibility:hover {
        color: #066c94;
        transition: all 0.5s;
    }
`;

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 1rem 1.2rem;

    border: 2px solid ${(props) => (props.$hasError ? "red" : "#dadce0")};
    border-radius: 50px;
    font-size: 1rem;
    /* outline-color: transparent; */
    outline-style: none;
    & + label {
        border-radius: 10px;
        margin: 1px;
    }
    &:focus {
        border: 2px solid /*  #1ca34d */
            ${(props) => (props.$hasError ? "red" : "#066c94")};
    }
    &:not(:placeholder-shown) + label,
    &:focus + label {
        color: /* #1ca34d */ rgb(184, 235, 255);
        transform: translateX(25px) translateY(-27px);
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0 6px;
        background-color: ${(props) => (props.$hasError ? "red" : "#066c94")};
    }

    &:not(:focus) + label {
        color: ${(props) => (props.$hasError ? "red" : "#808080")};
    }

    &:not(:placeholder-shown)&:not(:focus) + label {
        color: #dadce0;
        background-color: #808080;
    }

    &:focus ~ svg {
        color: ${(props) => (props.$hasError ? "red" : "#066c94")};
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 0;
    padding-left: 1.2rem;
    font-size: 1rem;
    color: #7f8fa6;
    pointer-events: none;
    transition: 0.6s;
`;

export const Helper = styled.p`
    position: absolute;
    left: 50%;
    top: 105%;
    padding-inline: 10px;
    white-space: nowrap;
    width: max-content;
    max-width: 100%;
    text-overflow: hidden;
    transform: translateX(-50%);
    border-radius: 50px;
    font-size: 0.9rem;
    color: red;
`;
