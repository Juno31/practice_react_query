//Core
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

//Pages
import Iframe from 'pages/Iframe'
import Page1 from 'pages/Page1'
import Page2 from 'pages/Page2'

function App() {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<Iframe />}/>
        <Route path={'/page1'} element={<Page1 />}/>
        <Route path={'/page2'} element={<Page2 />}/>
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100%;
`