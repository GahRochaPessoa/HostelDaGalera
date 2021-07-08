import styled from 'styled-components';
import { Input } from '@chakra-ui/react';

import img from '../../assets/hostel.jpeg';

export const WrapperContent = styled.div`
    background: url(${img}) no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
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
