import styled from 'styled-components'


export const Container = styled.div`
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

export const H1 = styled.h1`
font-size: 42px;
margin: 0 0 10px 0;
display: block;

@media (max-width: 800px) {
  font-size: 32px;
}
`

export const H2 = styled.h2`
font-size: 32px;
margin: 0 0 10px 0;

@media (max-width: 800px) {
  font-size: 22px;
}
`
export const H3 = styled.h3`
  font-size: 17px;
  margin: 0 0 20px 0;
  width: 35%;
  text-align: center;
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
export const Label = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: left;
  align-items: center;

`
export const SignUpHeader = styled.header`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  
`

export const Button = styled.button`
  border-radius: 15px;
  height: 25px;
  width: 75%;
  margin-top: 15px;
  background-color: #FFCD01;
  color: black;
  margin-left: 18px;
  font-family: Work Sans, sans-serif 
`

