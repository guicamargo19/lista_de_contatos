import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FormContato = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
`
export const Label = styled.label`
  color: #1c1c1c;
  font-weight: bold;
  font-size: 26px;
`
export const Input = styled.input`
  border: 1px solid #808080;
  border-radius: 4px;
  padding: 6px 6px 4px 6px;
  margin: 4px 0px 12px 0px;
  font-size: 16px;
`
export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const Button = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  background-color: #32cd32;
  padding: 8px;
  border-radius: 6px;
  border: none;
  margin-top: 6px;
  width: 100%;

  :hover {
    background-color: #44bd32;
  }
`
export const ButtonCancel = styled(Button)`
  background-color: #d93030;

  a {
    text-decoration: none;
    color: #fff;
  }

  :hover {
    background-color: #c01a1a;
  }
`
export const LinkCancel = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  border: 0px;
  margin: 0px;
  padding: 0px;
`
