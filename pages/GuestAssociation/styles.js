import styled from 'styled-components';

import img from '../../assets/hostel.jpeg';

export const WrapperContent = styled.div`
    background: url(${img}) no-repeat;
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        color: white;
        text-transform: uppercase;
    }
    #buttonIcon{
      margin-right: 8px ;
    }
`;

export const Button = styled.button`
    height: 30px;
    width:40%;
    background-color: #DC6128;
    margin-bottom: 12px;
    color:white;
    z-index: 1;
    transition: filter 0.2s;
    border-radius: 3px;
    & :hover{
        filter: brightness(1.6);
    }
    h3{
        color: white;
        text-transform: uppercase;
    }
    #buttonIcon{
      margin-right: 8px ;
    }

`;

export const ChoicesButtons = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
    width:50%;
    
`;
