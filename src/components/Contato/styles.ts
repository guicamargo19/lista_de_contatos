import styled from 'styled-components'

export const Contato = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 22px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`
export const Infos = styled.div`
  display: flex;
`
export const IconeContato = styled.img`
  height: 140px;
  max-width: 100%;
  margin-right: 16px;
`
export const DadosContato = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  h1 {
    color: #000;
    margin-bottom: 4px;
    font-weight: normal;
  }

  p {
    font-size: 18px;
    margin-left: 2px;
  }
`
export const InputInfos = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;

  input {
    width: 100%;
  }
`
export const InputContato = styled.input`
  font-size: 18px;
  padding: 0px 2px;
  border-radius: 6px;
  border: none;
`

export const InputNome = styled(InputContato)`
  padding: 0px;
  font-size: 32px;
  margin-bottom: 4px;
`

export const Edicao = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 14px;
`
export const StyledButtonEdit = styled.button`
  padding: 4px 14px;
  max-height: 35px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  font-size: 16px;
`

export const SalvarButton = styled(StyledButtonEdit)`
  background-color: #fff;
  border: 3px solid #9acd32;
  color: #9acd32;

  :hover {
    background-color: #9acd32;
    border: 3px solid #9acd32;
    color: #fff;
  }
`
export const CancelarButton = styled(StyledButtonEdit)`
  background-color: #fff;
  border: 3px solid #cd5c5c;
  color: #cd5c5c;

  :hover {
    background-color: #cd5c5c;
    border: 3px solid #cd5c5c;
    color: #fff;
  }
`

export const EditarButton = styled(StyledButtonEdit)`
  transition: 0.3s;
  background-color: #fff;
  border: 3px solid #daa520;
  color: #daa520;

  :hover {
    background-color: #daa520;
    border: 3px solid #daa520;
    color: #fff;
  }
`
export const RemoveButton = styled(StyledButtonEdit)`
  background-color: #fff;
  border: 3px solid #ff6347;
  color: #ff6347;

  :hover {
    background-color: #ff6347;
    border: 3px solid #ff6347;
    color: #fff;
  }
`

export const Acoes = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;

  button {
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 14px;
    cursor: pointer;
    border: none;
  }
`
export const StyledButtonActions = styled.button`
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
`

export const TelefoneButton = styled(StyledButtonActions)`
  background-color: #98e6a7;

  img {
    height: 50px;
    filter: invert(100%);
  }
`
export const MensagemButton = styled(StyledButtonActions)`
  background-color: #69cce0;

  img {
    height: 45px;
    filter: invert(100%);
  }
`
