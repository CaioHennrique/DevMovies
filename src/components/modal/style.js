import styled from "styled-components"

const Container = styled.div`

width: 50%;
position: fixed;
padding: 3rem;
background-color: #000;

iframe{
    border: none;
}

h1 {
    text-align: center;
    color: red;
    font-weight: bolder
}
`
const Background = styled.div`

height: 100vh;
width: 99.2vw;
background-color: #00000089;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
z-index: 999999;
overflow-y: hidden;
`

export { Container, Background }
