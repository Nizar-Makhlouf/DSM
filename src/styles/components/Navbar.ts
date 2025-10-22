import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    height: 70px;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    background-color: #066c94;
    z-index: 1000;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding-inline: 15px;
`;
interface ToggleProps {
    $isOpen: boolean;
}
export const Ul = styled.ul<ToggleProps>`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #066c94;
    height: 70px;

    @media (max-width: 720px) {
        & {
            position: absolute;
            top: 72px;
            right: 5px;
            flex-direction: column;
            width: 200px;
            height: fit-content;
            border-radius: 10px;
            transform: translateY(
                ${({ $isOpen }) => ($isOpen ? "0" : "-400px")}
            );
            transition: 0.8s cubic-bezier(0.82, -0.04, 0.24, 1.27);
        }
    }
`;

export const Li = styled.li`
    position: relative;
    list-style: none;

    margin: 5px;
    @media (max-width: 720px) {
        & Span {
            margin-inline: 10px;
        }
    }
    @media (min-width: 720px) {
        &::before,
        &::after {
            --scale: 0;
            --arrow-size: 10px;
            --tooltip-color: rgba(51, 51, 51, 0.6);
            position: absolute;
            bottom: -0.25rem;
            left: 50%;
            transform: translateX(-50%) translateY(var(--translate-y, 0))
                scale(var(--scale));
            transition: 0.3s transform;
            transform-origin: top center;
        }
        &::before {
            --translate-y: calc(100% + var(--arrow-size));
            content: attr(data-tooltype);
            padding: 0.5rem;
            width: max-content;
            text-align: center;
            border-radius: 5px;
            background-color: var(--tooltip-color);
            color: white;
            text-shadow: 0 1px black;
        }

        &:hover::before,
        &:hover::after {
            --scale: 1;
        }

        &::after {
            --translate-y: calc(1 * var(--arrow-size));
            content: "";
            border: var(--arrow-size) solid transparent;
            border-bottom-color: var(--tooltip-color);
            transform-origin: bottom center;
        }
    }
    &:has(.active) a,
    &:has(.active) {
        border-radius: 50px;
        box-shadow: inset 0px -5px 15px rgb(86, 241, 252);
        text-shadow: 0px -5px 15px rgb(86, 241, 252);
        /* border: 3px solid rgb(10, 122, 167); */
        filter: drop-shadow(inset 0px -20px 20px rgb(86, 241, 252));
    }
`;
export const SNavLink = styled(NavLink)`
    text-decoration: none;
    display: inline-block;
    border: 3px solid rgb(10, 122, 167);
    box-shadow: 0px 2px rgb(13, 198, 211);
    transition: all 0.5s;
    &:hover {
        border: 3px solid rgb(58, 174, 219);
        box-shadow: 0px 2px 5px rgb(86, 241, 252);
        text-shadow: 1px 5px 15px rgb(86, 241, 252),
            -1px -5px 20px rgb(86, 241, 252);
        /* filter: drop-shadow(1px 5px 15px rgb(86, 241, 252)); */
        filter: drop-shadow(1px 5px 15px rgb(86, 241, 252));
    }

    & svg {
        /* text-shadow: 1px 5px 15px rgb(86, 241, 252),
            -1px -5px 20px rgb(86, 241, 252); */
    }
    @media (max-width: 720px) {
        & {
            width: 194px;
        }
    }
    text-align: center;
    color: aqua;
    font-size: 1.1rem;
    border-radius: 50px;
    padding: 10px 20px;
`;

export const Span = styled.span`
    width: 27px;
    height: 2px;
    display: block;
    background-color: aqua;
    margin: 5px 0;
    transition: all 0.5s;
`;

export const MenuButton = styled.button<ToggleProps>`
    padding: 9px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #066c94;
    border: 3px solid #0a7aa7;
    box-shadow: 0px 2px rgb(13, 198, 211);
    outline: none;
    cursor: pointer;
    &:hover {
        border: 3px solid #3aaedb;
        box-shadow: 0px 2px 5px rgb(86, 241, 252);
        filter: drop-shadow(1px 5px 15px rgb(86, 241, 252));
    }
    &:active {
        transform: scale(0.85);
    }
    transition: all 0.5s;
    ${(props) =>
        props.$isOpen &&
        `& :nth-child(1) {
        transform: translateY(7px) rotate(45deg);
        transition: all 0.5s;
    }& :nth-child(2) {
        transform: scale(0);
    }& :nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
        transition: all 0.5s;
    }`}
`;

export const NavLinkWrapper = styled(NavLink)`
    text-decoration: none;
`;

export const Logo = styled.div`
    background-color: rgb(224, 215, 127);
    color: rgb(88, 53, 4);
    padding: 10px;
    border-radius: 15px 2px 15px 2px;
    transition: 0.5s all;
    &:hover {
        box-shadow: 1px 1px 20px rgb(224, 215, 127);
        text-shadow: 2px 2px 5px rgb(196, 118, 9);
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 50px;
    transition: all 0.5s;
    background-color: rgb(9, 230, 145);
    & a {
        text-decoration: none;
        color: #034416;
        border: none;
        box-shadow: none;
    }
    & a:hover {
        border: none;
        color: aqua;
        filter: drop-shadow(1px 5px 15px rgb(27, 238, 140));
    }
    &:hover {
        background-color: transparent;
    }

    @media (max-width: 720px) {
        & {
            margin: 5px;
        }
    }
`;
