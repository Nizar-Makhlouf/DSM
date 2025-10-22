import styled from "styled-components";

export const SearchBox = styled.div`
    position: relative;
    height: 2rem;
    width: 200px;
    display: flex;
    background-color: white;
    border-radius: 50px;
`;

export const SearchInput = styled.input`
    border: 1px solid #066c94;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 50px;
    padding-inline: 10px 30px;
    &:focus {
        border: 1px solid rgb(148, 98, 6);
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.3s ease;
    &:hover {
        background-color: rgba(224, 215, 127, 0.3) !important;
    }
    &:active {
        background-color: rgb(224, 215, 127) !important;
    }
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    background-color: white;
    border: none;
    outline: none;
    cursor: pointer;
`;
