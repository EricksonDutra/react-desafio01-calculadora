import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #006ded 0%, #1bace2 34.48%, #00e2ed 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

