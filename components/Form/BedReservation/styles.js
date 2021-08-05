import styled from 'styled-components';

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content:space-evenly;
    width: 70%;

    input, select{
        border-radius: 5px;
        height:50px;
        font-size: 25px;
        text-align: center;
    }

    #description{
        display: flex;
        text-align: flex-start;
        height:30%;
    }

    button{
        margin: 0 auto;
        font-size: 20px;
        height: 50px;
        width: 40%;
        border: 1px solid white;
        background-color: white;
        border-radius: 5px;
        transition: filter 0.2s;
        color:#DC6128;

        &:hover{
            filter:  brightness(1.6);
        }
    }
`;

export const ButtonDeleteContainer = styled.div`
    display: flex;

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
