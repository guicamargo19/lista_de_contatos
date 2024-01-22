import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Colors = {
  textWhiteColor: '#fff',
  textMainColor: '#34495e',
  cardBackground: '#ecf0f1',
  addButtonBackground: '#16a085',
  removeButtonBackground: '#c0392b',
  editButtonBackground: '#2980b9',
  saveButtonBackground: '#27ae60',
  cancelButtonBackground: '#c0392b',
  cadastrarButtonBackground: '#16a085',
  cancelEditButtonBackground: '#7f8c8d'
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
