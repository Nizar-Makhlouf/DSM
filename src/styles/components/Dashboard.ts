import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const MainHeaderContainer = styled.header`
    display: flex;
    height: 60px;
    background-color: #3aaedb;
    padding: 0 15px;
`;

export const LeftHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 10px;
`;

export const RightHeaderContainer = styled.div``;

export const CentralHeaaderContainer = styled.nav``;

export const FooterContainer = styled.footer`
    height: 50px;
    background-color: bisque;
`;

export const Row = styled.div`
    display: flex;
`;
export const Column = styled.div<{ $fullWidth: boolean }>`
    display: flex;
    flex-direction: column;
    ${({ $fullWidth }) =>
        !$fullWidth &&
        css`
            transform: translateX(80px);
            width: calc(100% - 80px);
        `}
`;

export const MainContainer = styled.main`
    overflow: auto;
    height: calc(100vh - 110px);
    padding: 10px;
`;

export const SidebarContainer = styled.aside<{ $fullWidth: boolean }>`
    ${({ $fullWidth }) =>
        $fullWidth
            ? css`
                  min-width: 240px;
              `
            : css`
                  position: absolute;
                  min-width: 80px;
                  &:hover {
                      min-width: 240px;
                  }
              `};
    transition: 0.5s;
    height: 100vh;
    background-color: #066c94;
    z-index: 100;
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 10px 0;
    border-bottom: 2px solid rgb(58, 174, 219);
`;
const rotateRight = keyframes`
    to{
        transform: rotate(180deg);
    }
`;
const rotateLeft = keyframes`
    to{
        transform: rotate(-360deg);
    }
`;
export const SidebarToogleButton = styled.button<{ $fullWidth: boolean }>`
    font-size: 1.5rem;
    background-color: transparent;
    font-family: monospace;
    font-weight: bold;
    border: none;
    outline: none;
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
    &:active {
        background-color: rgba(255, 255, 255, 0.7);
    }
    ${({ $fullWidth }) =>
        $fullWidth
            ? css`
                  animation: ${rotateRight} 0.5s linear 1 forwards;
              `
            : css`
                  animation: ${rotateLeft} 0.5s linear 1 forwards;
              `}
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background-color: bisque; */
`;

export const SidebarItem = styled.li`
    width: 95%;
    list-style: none;
    margin: 10px;
`;

export const PrivateStyledNavLink = styled(NavLink)`
    display: flex;
    border-radius: 50px;
    justify-content: start;
    align-items: center;
    transition: 0.5s;
    &.active {
        background-color: #3aaedb;
    }
    &:hover {
        background-color: rgba(58, 173, 219, 0.5);
    }
    & svg {
        font-size: 20px;
    }
    padding: 10px;
    gap: 10px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
`;

export const DashBoardContainer = styled.div`
    display: flex;
`;
