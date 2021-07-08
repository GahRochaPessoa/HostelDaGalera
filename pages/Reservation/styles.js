import styled from 'styled-components';
import { Input, Button } from 'antd';

import img from '../../assets/hostel.jpeg';

export const WrapperContent = styled.div`
    background: url(${img}) no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ReservationContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
`;

export const ReservationWrapper = styled.div`
    background-color: orange;
    width: 80%;
    margin-top: 30px;
    display: flex;
`;

export const SearchInput = styled(Input)`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`;

export const SearchButton = styled(Button)`
    background-color:red;
    align-items:center;
    justify-content:center;
`;

export const DateContainer = styled.div`
    margin-top:15%;
`;

export const SelectContainer = styled.div`
    margin-top: 50px;
    background-color: white;
    height: 13%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const CheckboxContainer = styled.div`
    margin-top: 50px;
    background-color: white;
    height: 13%;
    display:grid;
    grid-template-columns: 200px 200px;
`;

export const ButtonContainer = styled.div`
    margin-top: 50px;
    height: 13%;
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ButtonReservation = styled(Button)`
    color: white;
    background-color:#6558f5;
    height: 60%;
    border-radius:10px;

`;
