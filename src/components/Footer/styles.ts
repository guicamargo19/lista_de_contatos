import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Footer = styled.footer`
  max-width: 640px;
  background-color: transparent;
  text-align: center;
  color: ${Colors.textMainColor};
  margin: 0 auto;
  margin-top: 16px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 6px;
      font-size: 26px;

      a {
        color: ${Colors.textMainColor};
      }
    }
  }

  p {
    margin-bottom: 6px;
  }
`
