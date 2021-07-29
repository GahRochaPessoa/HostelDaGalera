import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width:100%;
    background-color: teal;
    
`;

export const HomeTitle = styled(Flex)`
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #DC6128;
    h1{
        font-size:30px;
        font-weight:bold;   
    }
`;

export const HeaderWrapper = styled(Flex)`
    width: 90%;
    height:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    #userLogoHeader{
        color:white;
    }

    #headerDrop{
        margin-top: 5px;
        color: white;
    }

    h2{
        padding: 0 10px;
        color: white;
        font-weight:bold;
    }
`;

export const DropDownMenuOptions = styled.div`
    width: 100px;
    height: 60px;
    background-color: white;
    position: absolute;
    top: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const DropDownMenuWrapper = styled.div`
    border: 2px solid white;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    background-color: #DC6128;
    transition: filter 0.2s;
    color: white;
        &:hover{
            filter: brightness(1.6);
        }
    

`;
