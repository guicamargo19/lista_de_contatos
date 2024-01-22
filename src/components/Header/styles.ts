import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #34495e;
  margin-top: 20px;
  margin-bottom: 16px;
  padding: 18px 16px;
  border-radius: 12px;

  h1 {
    font-size: 34px;
    color: ${Colors.backgroundColor};
    margin: auto 0;
  }

  i {
    font-size: 50px;
    color: #fff;
    padding: 0;
  }
`
