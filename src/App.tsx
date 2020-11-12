import React from 'react'
import styled from 'styled-components'
import { ChatBox, InputMessage } from './components'

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`

const Title = styled.h1`
  margin: auto;
  color: pink;
  display: inline-block;
  font-size: 4vw;
  font-weight: 800;
`

export const App = () => {
  return (
    <Container>
      <Title>Chat to save memories</Title>
      <ChatBox />
      <InputMessage />
    </Container>
  )
}
