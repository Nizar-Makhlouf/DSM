import styled from "styled-components";

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 2px solid #dadce0;
    border-radius: 10px;
    height: 50%;
    padding: 20px 10px;
    min-height: 430px;
    box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.2);
    min-width: 500px;
    @media (max-width: 550px) {
        width: 450px;
        min-width: 450px;
    }
    @media (max-width: 500px) {
        width: 400px;
        border: none;
        box-shadow: none;
        min-width: 350px;
    }
    @media (max-width: 350px) {
        /* width: 320px; */
        min-width: 320px;
    }
    @media (max-width: 300px) {
        /* width: 280px; */
        min-width: 280px;

        padding-inline: 0;
    }
`;
