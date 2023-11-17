import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #1bace2;
    border: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #006ded;
        border: 1;
        border-color: #FFFFFF;
        flex-direction: column;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;

        &:focus {
            border: 0;
        }
    }
`