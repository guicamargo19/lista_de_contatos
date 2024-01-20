import { useDispatch } from 'react-redux'

import * as S from './styles'
import iconeContato from '../../assets/icone-contato.png'
import iconeTelefone from '../../assets/call-icon.png'
import iconeMensagem from '../../assets/mensagem-icon.png'

import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

import { useState } from 'react'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState(nomeOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [email, setEmail] = useState(emailOriginal)
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
        id
      })
    )
    setEstaEditando(false)
  }

  function cancelarEdicao() {
    setNome(nomeOriginal),
      setTelefone(telefoneOriginal),
      setEmail(emailOriginal),
      setEstaEditando(false)
  }

  return (
    <S.Contato>
      <S.Infos>
        <S.IconeContato src={iconeContato} />
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
            </>
          ) : (
            <>
              <h1>{nome}</h1>
              <p>{telefone}</p>
              <p>{email}</p>
            </>
          )}
          <img src="../../assets/icone-contato.png" alt="" />
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
      <S.Acoes>
        <S.TelefoneButton>
          <img src={iconeTelefone} />
        </S.TelefoneButton>
        <S.MensagemButton>
          <img src={iconeMensagem} />
        </S.MensagemButton>
      </S.Acoes>
    </S.Contato>
  )
}

export default Contato
