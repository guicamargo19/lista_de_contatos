import * as S from './styles'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  info: infoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState(nomeOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [info, setInfo] = useState(infoOriginal)
  const [estaEditando, setEstaEditando] = useState(false)

  const handleRemoverContato = () => {
    dispatch(remover(id))
  }

  const handleEditarContato = () => {
    dispatch(
      editar({
        nome,
        telefone,
        email,
        info,
        id
      })
    )
    setEstaEditando(false)
  }

  function cancelarEdicao() {
    setNome(nomeOriginal),
      setTelefone(telefoneOriginal),
      setEmail(emailOriginal),
      setInfo(infoOriginal),
      setEstaEditando(false)
  }

  return (
    <S.Infos>
      <S.DadosContato>
        {estaEditando ? (
          <>
            <S.InputInfos>
              <S.InputNome
                value={nome}
                id="nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </S.InputInfos>
            <S.InputInfos>
              <S.InputContato
                value={telefone}
                id="telefone"
                required
                onChange={(e) => setTelefone(String(e.target.value))}
              />
            </S.InputInfos>
            <S.InputInfos>
              <S.InputContato
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputInfos>
            <S.InputInfos>
              <S.InputInfo
                value={info}
                id="info"
                onChange={(e) => setInfo(e.target.value)}
              />
            </S.InputInfos>
          </>
        ) : (
          <>
            <h1>{nome}</h1>
            <p>{telefone}</p>
            <p>{email}</p>
            <p>{info}</p>
          </>
        )}
        <S.Edicao>
          {estaEditando ? (
            <>
              <S.SalvarButton onClick={handleEditarContato}>
                Salvar
              </S.SalvarButton>
              <S.CancelarButton onClick={cancelarEdicao}>
                Cancelar
              </S.CancelarButton>
            </>
          ) : (
            <>
              <S.EditarButton onClick={() => setEstaEditando(true)}>
                Editar
              </S.EditarButton>
              <S.RemoveButton onClick={handleRemoverContato}>
                Excluir
              </S.RemoveButton>
            </>
          )}
        </S.Edicao>
      </S.DadosContato>
    </S.Infos>
  )
}

export default Contato
