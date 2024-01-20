import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Header = styled.header`
  background-color: gray;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 26px 48px 26px 48px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 34px;
    color: ${Colors.backgroundColor};
    margin: auto 0;
  }

  img {
    width: 50px;
    margin: 0;
    filter: invert(100%);
    padding: 0;
  }
`
