import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Colors = {
  textColor: '#000',
  backgroundColor: '#f2f8fa',
  mainColor: '1e90ff',
  secondaryColor: '#465a0f'
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

body {
  padding-bottom: 80px;
}
`

export const Container = styled.main`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;
  overscroll-behavior-y: auto;
`
