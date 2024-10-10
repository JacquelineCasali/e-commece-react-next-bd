'use client'

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCarrinho from '../hooks/useCarrinho'
import useAPI from '../hooks/useAPI'
import { FormaPagamento } from '@/core/pedido/FormaPagamento'
import PedidoEntrega from '@/core/pedido/PedidoEntrega'
import { ItemCarrinho, Pedido } from '@/core'
import { Status } from '@/core/pedido/Status'
import ItemPedido from '@/core/pedido/ItemPedido'

export interface ContextoPagamentoProps {
    formaPagamento: FormaPagamento
    entrega: Partial<PedidoEntrega>
    alterarFormaPagamento: (formaPagamento: FormaPagamento) => void
    alterarEntrega: (entrega: Partial<PedidoEntrega>) => void
    finalizarCompra: () => void
}

const ContextoPagamento = createContext<ContextoPagamentoProps>({} as any)

export function ProvedorPagamento(props: any) {
    const { httpPost } = useAPI()
    const { itens, valorTotal, limparCarrinho } = useCarrinho()
    const { salvarItem, obterItem } = useLocalStorage()
    const router = useRouter()

    const [formaPagamento, setFormaPagamento] = useState<FormaPagamento>(
        FormaPagamento.PIX,
    )
    const [entrega, setEntrega] = useState<Partial<PedidoEntrega>>({})

    function alterarFormaPagamento(formaPagamento: FormaPagamento) {
        salvarItem('formaPagamento', formaPagamento)
        setFormaPagamento(formaPagamento)
    }

    function alterarEntrega(entrega: Partial<PedidoEntrega>) {
        salvarItem('entrega', entrega)
        setEntrega(entrega)
    }

    async function finalizarCompra() {
        const pedido: Partial<Pedido> = {
            data: new Date(),
            formaPagamento,
            valorTotal,
            entrega: entrega as PedidoEntrega,
            status: Status.RECEBIDO,
            itens: itens.map(
                (item: ItemCarrinho) =>
                    ({
                        produto: item.produto,
                        quantidade: item.quantidade,
                        precoUnitario: item.produto.precoPromocional,
                    }) as ItemPedido,
            ),
        }

        await httpPost('/pedidos', pedido)
        limparCarrinho()
        router.push('/checkout/sucesso')
    }

    useEffect(() => {
        const entrega = obterItem('entrega')
        const formaPagamento = obterItem('formaPagamento')
        if (entrega) setEntrega(entrega)
        if (formaPagamento) setFormaPagamento(formaPagamento)
    }, [obterItem])

    return (
        <ContextoPagamento.Provider
            value={{
                entrega,
                formaPagamento,
                alterarEntrega,
                alterarFormaPagamento,
                finalizarCompra,
            }}
        >
            {props.children}
        </ContextoPagamento.Provider>
    )
}

export default ContextoPagamento
