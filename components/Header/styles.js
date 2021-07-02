import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    width:100%;
    
`;

export const HomeTitle = styled(Flex)`
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: center;

    h1{
        font-size:30px;
        font-weight:bold;   
    }
`;
