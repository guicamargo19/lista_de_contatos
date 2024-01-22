import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FormContato = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
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
  color: #34495e;
  outline-color: #34495e;
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
  background-color: #16a085;
  // padding: 8px;
  border-radius: 6px;
  border: 2px solid transparent;
  margin-top: 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #16a085;
    border: 2px solid #16a085;
  }
`

export const LinkCancel = styled(Link)`
  display: block;
  background-color: #c0392b;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  margin-top: 6px;
  width: 100%;
  cursor: pointer;
  color: #fff;
  width: 100%;
  text-align: center;
  height: 100%;
  border: 2px solid transparent;
  padding: 8px;

  &:hover {
    background-color: transparent;
    border: 2px solid #c0392b;
    color: #c0392b;
  }
`
export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 90px;
  border-radius: 6px;
  margin-bottom: 8px;
  color: #34495e;
  padding: 6px;
  outline-color: #34495e;
`
