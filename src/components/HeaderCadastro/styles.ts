import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.textMainColor};
  margin-top: 20px;
  margin-bottom: 16px;
  padding: 18px 16px;
  border-radius: 12px;

  h1 {
    color: ${Colors.textWhiteColor};
    margin: auto 0;
  }

  i {
    font-size: 50px;
    color: ${Colors.textWhiteColor};
  }
`
