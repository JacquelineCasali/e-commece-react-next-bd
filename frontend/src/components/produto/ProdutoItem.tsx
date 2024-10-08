"use client";
import { Produto } from "@/core";
import { Moeda } from "@/core/utils";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NotaReview from "../shared/NotaReview";
import useCarrinho from "@/data/hooks/useCarrinho";
import { useRouter } from "next/navigation";


export interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;
  const { adicionarItem } = useCarrinho()
  const router = useRouter();
  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
        <div className="absolute flex justify-end top-2.5 right-2.5">
           <NotaReview nota={props.produto.nota}/>
        </div>
      <div className="h-44 w-full relative xl:h-48">
        <Image
          src={produto.imagem}
          alt="Imagem do produto"
          className="object-contain"
          fill
        />
      </div>
      <div
        className="
                flex-1 flex flex-col p-5 gap-3 
                border-t border-white/10" >
        <span className="text-base font-semibold xl:text-lg">
          {props.produto.nome}
        </span>
        <span className="text-xs border-b border-dashed self-start xl:text-sm">
          {produto.especificacoes.destaque}
        </span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through ">
            de
            {Moeda.formatar(props.produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Moeda.formatar(props.produto.precoPromocional)}
          </span>
        </div>
        <button
          className="
                    flex justify-center items-center h-8 gap-2
                    bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                "
          onClick={(e: any) => {
            e.preventDefault();
         adicionarItem(props.produto)  
         router.push('/checkout/carrinho')   
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
