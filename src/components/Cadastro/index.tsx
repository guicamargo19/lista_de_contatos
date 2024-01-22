import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'

const CadastrarContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [info, setInfo] = useState('')

  const formatarTelefone = (valor: string) => {
    // Remove todos os caracteres que não sejam dígitos
    const telefoneSemMascara = valor.replace(/\D/g, '')

    // Formatação específica para telefone com DDD
    const ddd = telefoneSemMascara.slice(0, 2)
    const parte1 = telefoneSemMascara.slice(2, 7)
    const parte2 = telefoneSemMascara.slice(6, 10)

    return `(${ddd}) ${parte1}-${parte2}`
  }

  const handleChangeTelefone = (evento: { target: { value: string } }) => {
    const valor = evento.target.value
    const telefoneFormatado = formatarTelefone(valor)
    setTelefone(telefoneFormatado)
  }

  const cadastrarNovoContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        info
      })
    )
    navigate('/')
  }

  return (
    <div>
      <S.FormContato onSubmit={cadastrarNovoContato}>
        <S.Label htmlFor="nome">Nome</S.Label>
        <S.Input
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          required
          placeholder="Nome"
          id="nome"
        />
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="email@email.com"
          id="email"
        />
        <S.Label htmlFor="telefone">Telefone</S.Label>
        <S.Input
          value={telefone}
          onChange={handleChangeTelefone}
          type="text"
          id="telefone"
          required
          placeholder="(00) 00000-0000"
        />
        <S.Label htmlFor="info">Informações</S.Label>
        <S.TextArea
          onChange={(evento) => setInfo(evento.target.value)}
          id="info"
        ></S.TextArea>
        <S.Options>
          <S.Button>Cadastrar</S.Button>
          <S.LinkCancel to="/">Cancelar</S.LinkCancel>
        </S.Options>
      </S.FormContato>
    </div>
  )
}

export default CadastrarContato
