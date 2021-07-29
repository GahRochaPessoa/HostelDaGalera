import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

export const MenuContainer = styled(Flex)`
    position: absolute;
    align-items: flex-start ;
    justify-content: flex-start;
    height:100vh;
    width: 3vw;
    padding: 8px;
    @media (max-width:768px){
        width:6vw;
    }
`;

export const MenuWrapper = styled(Flex)`
    position: fixed;
    align-items: flex-start;
    justify-content: flex-start;
    height:100vh;
    width: 20vw;
    padding: 15px;
    z-index: 99999;
    flex-direction:column;
    background-color:#F8F8F8;
    @media (max-width:768px){
        width:40vw;
    }
`;

export const MenuHeading = styled.div`
    display: flex;
    height:100px;
    width:100%;
    align-items: center;
    justify-content:space-evenly;

    h2{
        text-align:center;
        padding:0 30px;
        font-size:25px;
        font-weight: bold;
    }
`;

export const MenuOptionsContainer = styled(Flex)`
    width:100%;
    height:100%;
    align-items: flex-start;
    justify-content:flex-start;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

export const MenuOption = styled.div`
    cursor: pointer;
    width: 100%;
    height:80px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-top: 1px solid #000;
    transition: filter 0.2s;

    
    
    p{
        font-size:25px;
    }

    :hover{
        margin-left: -5%;
        width:100%;
        background-color: #DC6128;
        filter: brightness(1.6);
        color: white;
    }
`;
