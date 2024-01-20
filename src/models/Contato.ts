class Contato {
  nome: string
  telefone: string
  email: string
  id: number
  imagem?: string

  constructor(
    nome: string,
    telefone: string,
    email: string,
    id: number,
    imagem = '../assets/icone-contato.png'
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.imagem = imagem
  }
}

export default Contato
