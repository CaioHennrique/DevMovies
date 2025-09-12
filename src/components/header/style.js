import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1.5rem;
  z-index: 999999;
  position: fixed;

  background-color: ${props => props.$mudarCor ? ("#000") : "transparent"};
  transition: background-color 0.6s ease-in-out;
  
 img {
  width: 25%;
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
