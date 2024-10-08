/* eslint-disable prettier/prettier */
import { Produto } from '../produto'

export default interface ItemCarrinho {
    produto: Produto
    quantidade: number
}
