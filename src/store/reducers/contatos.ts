import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  lista: Contato[]
}

const initialState: ContatosState = {
  lista: [
    {
      nome: 'Gabrielle Tomoda',
      telefone: '(17) 98776-9900',
      email: 'gabrielle@gmail.com',
      info: 'Esposa',
      id: 1
    },
    {
      nome: 'Guilherme Camargo',
      telefone: '(17) 998877-5544',
      email: 'camargo@gmail.com',
      info: 'celular novo',
      id: 2
    },
    {
      nome: 'Cristiano Ronaldo',
      telefone: '(17) 98877-4311',
      email: 'cr7@gmail.com',
      info: 'Melhor do mundo',
      id: 3
    },
    {
      nome: 'Giselle Tomoda',
      telefone: '(18) 988777-1233',
      email: 'giselle@gmail.com',
      info: 'Cunhada',
      id: 4
    },
    {
      nome: 'Douglas',
      telefone: '(17) 98776-1235',
      email: 'cabelos@gmail.com',
      info: 'Cabeleireiro',
      id: 5
    },
    {
      nome: 'Sonia',
      telefone: '(11) 997755-0077',
      email: 'sonia@predio.com',
      info: 'Zeladora',
      id: 6
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.lista.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato !== -1) {
        state.lista[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.lista[state.lista.length - 1]

      const contatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.lista.push(contatoNovo)
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
