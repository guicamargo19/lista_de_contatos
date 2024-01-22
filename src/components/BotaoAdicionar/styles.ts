import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Adicionar = styled(Link)`
  transition: 0.3s;
  display: flex;
  height: 92px;
  width: 92px;
  border-radius: 12px;
  background-color: ${Colors.addButtonBackground};
  color: ${Colors.textWhiteColor};
  position: fixed;
  right: 290px;
  top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  padding: 16px;
  border: 2px solid #16a085;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid #16a085;
    color: ${Colors.addButtonBackground};
  }
`
