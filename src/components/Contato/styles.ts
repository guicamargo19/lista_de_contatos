import styled from 'styled-components'

export const Infos = styled.div`
  display: flex;
  max-width: 640px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  background-color: #ecf0f1;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const DadosContato = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    color: #2c3e50;
    margin-bottom: 8px;
    font-weight: normal;
    padding: 2px;
    border: 1px solid transparent;
  }

  p {
    font-size: 18px;
    margin-bottom: 8px;
    margin-left: 2px;
    color: #2c3e50;
    padding: 2px 0;
    border: 1px solid transparent;
  }
`

export const InputInfos = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  color: #2c3e50;
  outline-color: #2c3e50;

  input {
    width: 100%;
  }
`

export const InputContato = styled.input`
  font-size: 18px;
  padding: 2px;
  border-radius: 6px;
  border: 1px solid #bdc3c7;
  margin-bottom: 8px;
  color: #2c3e50;
  outline-color: #2c3e50;
  background-color: #ecf0f1;
`

export const InputNome = styled(InputContato)`
  padding: 2px;
  font-size: 32px;
  margin-bottom: 8px;
`

export const InputInfo = styled(InputContato)`
  padding: 2px;
  margin-bottom 8px;
`

export const Edicao = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 10px;
  margin-top: 14px;
  padding-right: 15px;
`

export const StyledButtonEdit = styled.button`
  padding: 4px 14px;
  width: 100px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
`

export const SalvarButton = styled(StyledButtonEdit)`
  background-color: transparent;
  border: 2px solid #27ae60;
  color: #27ae60;

  &:hover {
    background-color: #27ae60;
    border: 2px solid #27ae60;
    color: #fff;
  }
`

export const CancelarButton = styled(StyledButtonEdit)`
  background-color: #7f8c8d;
  border: 2px solid #7f8c8d;
  color: #fff;

  &:hover {
    background-color: transparent;
    border: 2px solid #7f8c8d;
    color: #7f8c8d;
  }
`

export const EditarButton = styled(StyledButtonEdit)`
  background-color: transparent;
  border: 2px solid #2980b9;
  color: #2980b9;

  &:hover {
    background-color: #2980b9;
    border: 2px solid #2980b9;
    color: #fff;
  }
`

export const RemoveButton = styled(StyledButtonEdit)`
  background-color: #c0392b;
  border: 2px solid #c0392b;
  color: #fff;

  &:hover {
    background-color: transparent;
    border: 2px solid #c0392b;
    color: #c0392b;
  }
`
