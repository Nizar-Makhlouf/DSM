import { styled } from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    width: 100%;
    max-width: 420px;
    border-radius: 50px;
    border: none;
    font-size: 1.2rem;
    transition: all 0.5s;
    &:has(a) {
        padding: 0;
    }
    & a {
        display: block;
        color: inherit;
        text-decoration: none;
        height: 100%;
        width: 100%;
        padding: 10px 20px;
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: #066c94;
    color: white;
    cursor: pointer;

    /* box-shadow: 1px -1px 2px #000000, 1px 5px 1px #000000; */

    &:hover {
        /* background-color: rgba(6, 108, 148, 0.35); */
        box-shadow: inset 1px 1px 20px rgb(38, 233, 240),
            inset 1px -1px 20px rgb(38, 233, 240);
        text-shadow: 1px 10px 20px rgb(38, 233, 240);
        filter: drop-shadow(inset 0px -20px 20px rgb(86, 241, 252));
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const SuccessButton = styled(Button)`
    background-color: rgb(116, 255, 172);
    color: rgb(6, 49, 23);

    &:hover {
        box-shadow: inset 1px 1px 25px rgb(3, 71, 30),
            inset -1px 1px 25px rgb(116, 255, 172);
        text-shadow: 1px 10px 20px rgb(116, 255, 172);
        filter: drop-shadow(inset 0px -20px 20px rgb(116, 255, 172));
    }
    &:active {
        transform: scale(0.95);
    }
`;
export const Hr = styled.hr`
    padding: 1px;
    width: 100%;
    margin: 10px;
`;
