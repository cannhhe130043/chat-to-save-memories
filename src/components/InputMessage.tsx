import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  height: 7vh;
  margin: 20px auto 20px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
`

const Input = styled.input`
  flex: 1;
  margin: 10px;
  border-radius: 50px;
  outline: none;
  border: 1px solid #bcbdc0;
  padding-left: 10px;
  font-size: 1vw;
`

const Send = styled.button`
  margin: 10px 10px 10px 0;
  background-color: #a3d063;
  border: 2px solid #a3d063;
  border-radius: 50px;
  width: 10%;
  outline: none;
  font-size: 1vw;
  :hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`

export const InputMessage = () => {
  return (
    <Container>
      <Input placeholder="Send something to your lover" />
      <Send title="Send now!">Send</Send>
    </Container>
  )
}
