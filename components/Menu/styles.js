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
    justify-content:space-between;

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
    align-items: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
`;

export const MenuOption = styled.div`
    cursor: pointer;
    width: 100%;
    height:116px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-top: 1px solid #000;

    .iconStyle{
        height:30px;
        width:30px;
        color: red;
    }
    p{
        font-size:25px;
    }

    :hover{
        background-color:#E1E1E1;
    }

`;
