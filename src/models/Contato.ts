class Contato {
  nome: string
  telefone: string
  email: string
  info: string
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    info: string,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.info = info
  }
}

export default Contato
