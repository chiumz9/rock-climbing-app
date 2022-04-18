import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex; 
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 40px;

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