import { Produto } from "@/core"

export interface TituloProdutoProps {
    produto:Produto
}


export default function TituloProduto(props:TituloProdutoProps) {
  const {produto}=props
  
    return (
    <div className="flex flex-col">
        <div className="text-2xl">{produto?.nome}</div>
        <div className="font-light text-zinc-400 text-justify">{produto?.descricao}</div>
    </div>
  )
}
