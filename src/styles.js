import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body { 
    font-family: 'Work Sans', sans-serif;
    margin: 0; 
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: #fffff0;
  }
`

export const Pill = styled.div`
  background: #FFCD01;
  border: 2px solid black;
  border-radius: 30px;
  height: 20px; 
  width: 20px; 
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
background: none;
border: 0; 
cursor: pointer;
height: 24px;
width: 24px;
padding: 0; 
position: relative;

&::before, 
&::after{
  background-color: #000;
  content: '';
  height: 24px;
  width: 2px;
  position: absolute;
  top: 0; 
  left: 9px;
}

&::before { 
  transform: rotate(45deg);
}
&::after {
  transform: rotate(-45deg);
}
`

export const Button = styled.button`
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  background: none;
  color: #FFCD01;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #FFCD01;
    color: #014421;
  }
`

export const SignContainer = styled.div`
background-color: #fffff0;
padding: 160px 40px;
height: 100vh;
width: 100vw;
z-index: 4;
/* overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${ $top }px` : 0)}; */

@media (max-width: 800px) {
  padding: 114px 20px;
}
`

export const H1Sign = styled.h1`
font-size: 42px;
margin: 0 0 10px 0;
display: block;
color: #014421;

@media (max-width: 800px) {
  font-size: 32px;
}
`

export const H2Sign = styled.h2`
font-size: 32px;
margin: 0 0 10px 0;
color: #014421;

@media (max-width: 800px) {
  font-size: 22px;
}
`
export const H3Sign = styled.h3`
  font-size: 17px;
  margin: 0 0 20px 0;
  width: 35%;
  text-align: center;
  color: #014421;

  @media (max-width: 800px) {
    font-size: 12.95px;
  }
  `

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`
export const SignLabel = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #014421;

`
export const SignUpHeader = styled.header`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  
`

export const SignButton = styled.button`
  border-radius: 15px;
  height: 27px;
  width: 75%;
  margin-top: 15px;
  background-color: #FFCD01;
  color: black;
  margin-left: 18px;
  font-family: Work Sans, sans-serif;
  text-align: center;
`

export const SignInput = styled.input`
  background-color: #fffff0;
  padding: 4px;
  gap: 10px 0;
  box-sizing: border-box;
  border: 2px solid #014421;
  margin-bottom: 5px;
  
`