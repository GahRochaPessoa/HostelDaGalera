import styled from 'styled-components';
import { Input } from '@chakra-ui/react';

export const Button = styled(Input)`
    width:40%;
    background-color: #6558f5;
    margin-bottom: 12px;
    color:white;
    z-index: 1;

`;

export const ContainerButtons = styled.div`
    margin: 0 auto;
    width:50%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content:space-evenly;
    width: 70%;

    input, select{
        border-radius: 5px;
        height:50px;
        font-size: 25px;
        text-align: center;
    }
    button{
        margin: 0 auto;
        font-size: 20px;
        height: 50px;
        width: 40%;
        background-color: #6558f5;
        border-radius: 5px;
    }
`;

export const ButtonDeleteContainer = styled.div`
    display: flex;

`;
