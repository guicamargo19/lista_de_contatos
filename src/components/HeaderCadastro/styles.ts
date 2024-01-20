import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Header = styled.header`
  background-color: gray;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 30px 48px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${Colors.backgroundColor};
    margin: auto 0;
  }

  img {
    width: 50px;
    margin: 0;
    padding: 0;
  }
`
