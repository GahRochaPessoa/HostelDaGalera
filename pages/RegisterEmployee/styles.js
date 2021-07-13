import styled from 'styled-components';
import { Form } from 'antd';
import { Input } from '@chakra-ui/react';
import img from '../../assets/hostel.jpeg';

export const WrapperContent = styled.div`
    background: url(${img}) no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled(Form)`
    background-color: orange;
    flex-direction: column;
    width: 60%;
    height:60%;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width:70%;
        background-color:#6558f5;

        input{
            width: 548px;
            height:60px;
            font-size:20px;
            ::placeholder{
                font-size:20px;
            }
        }
    }
   
`;

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
