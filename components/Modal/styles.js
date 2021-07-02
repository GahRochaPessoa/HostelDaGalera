import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    margin: 0 auto;
    background-color: teal;
    height: 35%;
    width: 30%;
    border-radius: 5px;
    z-index: 8;
    top: 35%;
    left: 35%;
`;

export const ModalWrapper = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    align-items: center;
`;

export const CloseButton = styled.div`
    cursor: pointer;
    padding: 20px;
    display: flex;
    justify-content:flex-end;

    h2{
        font-weight: bold;
        font-size: 20px;
    }
`;
