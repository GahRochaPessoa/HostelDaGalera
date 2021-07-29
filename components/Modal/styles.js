import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    margin: 0 auto;
    background-color: #DC6128;
    height: 70%;
    width: 50%;
    border-radius: 5px;
    z-index: 8;
    top: 25%;
    left: 30%;
`;

export const ModalWrapper = styled.div`
    display: flex;
    height:100%;
    flex-direction: column;
    align-items: center;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
    h1{ color: white;
        font-size:25px;
        margin-left: 22%;
        font-weight:700;
    }
    h2{
        color: white;
        transition: filter 0.2s;
        text-align: end;
        &:hover{
            filter: brightness(1.6);
        }
    }

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
