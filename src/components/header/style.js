import styled from "styled-components"
import Breakpoints from "../../styles/breakpoints"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 2.5rem;
  z-index: 999999;
  position: fixed;
  width: 100vw;

  background-color: ${props => props.$mudarCor ? ("#000") : "transparent"};
  transition: background-color 0.6s ease-in-out;
  
 img {
  width: 30%;
  
}

@media ${Breakpoints.pequeno}{
 
    padding: .8rem 1rem; 
    justify-content: space-around;
}

@media ${Breakpoints.medio}{
 
  justify-content: space-around;
}

`

const Menu = styled.ul`

display: flex;
gap: 3rem;
list-style: none;



`
const Li = styled.li`

font-weight: 600;
font-size: 1.8rem;
position: relative;

@media ${Breakpoints.medio}{
 font-size: 1.4rem ;

}

@media  ${Breakpoints.pequeno}{
  font-size:1.2rem;
}

a {
  color: white;
  text-decoration: none;
}

&::after {
  content: "";
  height: 3px;
  width: ${props => props.$estaAtivo ? ("100%") : (0)};
  background-color: #189d2f;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.5s ease-in-out;
}

&:hover::after{
  width: 100%;
}

`


export { Container, Menu, Li }
