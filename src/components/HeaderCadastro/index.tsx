import * as S from './styles'
import iconLista from '../../assets/lista-contatos-icon.png'

const Header = () => {
  return (
    <S.Header>
      <h1>Novo Contato</h1>
      <img src={iconLista} alt="" />
    </S.Header>
  )
}

export default Header
