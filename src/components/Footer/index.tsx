import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/guicamargo19">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
        <p>2024 - &copy; Guilherme Camargo. Todos os direitos reservados.</p>
        <p>
          Página desenvolvida no curso de Full Stack Python na EBAC - Escola
          Britânica de Artes Criativas e Tecnologia.
        </p>
      </div>
    </S.Footer>
  )
}

export default Footer
