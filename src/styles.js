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