import Styled from 'styled-components';

export const LoginContainer = Styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background-color: white;
    form{
        height: 50%;
        width: 30%;
        background-color:white;
        min-width: 400px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        input{
            width: 300px;
            height: 30px;
            border-radius:3px;      
        }
    }
    input[type="submit"]{
        background-color: #DC6128;
        color: white;
        width: 330px;
        transition: filter 0.2s;
        & :hover{
        filter: brightness(1.6);
    }
    }
`;

export const LoginHeader = Styled.div`
    height: 200px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
`;

export const LoginForm = Styled.form`
    background-color:white;
    width: 550px;
    height: 200px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;

    input{
        width: 300px;
        height:30px;
        border-radius:4px;
        border: none;
        display: flex;
        align-items:center;
        justify-content: center;
    }

    input[type="submit"]{
        :hover{
            background-color:#DC6128;
            color: white;
        }
    }


`;
