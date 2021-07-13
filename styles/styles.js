import Styled from 'styled-components';


export const LoginContainer = Styled.div`

    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
`;

export const LoginHeader = Styled.div`
    height: 200px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
`;

export const LoginForm = Styled.form`
    background-color:orange;
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
            background-color:#6558F5;
            color: white;
        }
    }



`;