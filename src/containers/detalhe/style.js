import styled, { keyframes } from "styled-components"

const scale = keyframes`

from{
    transform: scale(0);
}to{
    transform: scale(1);
}

`


const Background = styled.div`
height: 60vh;
background-image: url(${props => props.image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

&::before{
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}

&::after{
    position: absolute;
    content: "";
    bottom: 0;
    height: 120px;
    width: 100%;
    background: linear-gradient(180deg,rgba(56, 56, 56, 0) 0%, rgba(0, 0, 0, 1) 99%);
}

`

const Cover = styled.div`
display: flex;
align-items: flex-start;
padding: 2rem;
margin-top: 2rem;
height: 100%;
z-index: 99;

img{
    width: 500px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111/20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
}

`

const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
height: 100%;
margin-top:-10rem;
cursor:default;

`
const Info = styled.div`
display: flex;
align-items: flex-start;
width: 50%;
color: white;
font-weight: 700;
z-index: 99;
flex-direction: column;
padding: 2rem;

h2{
    font-size: 5rem;
   
}
p{
font-size: 1.2rem;

}

`

const ContainerTrailers = styled.div`
display: flex;
flex-direction: column;
gap: 5rem;
align-items: center;
justify-content: center;
margin-top: 5rem;
width: 100%;

h4{
    font-size:1.2rem;
    color: white;
    font-weight: 700;
    margin-bottom:2rem;
}

div {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
iframe {
    border: none;
}
`


export { Container, Background, Cover, Info, ContainerTrailers }
