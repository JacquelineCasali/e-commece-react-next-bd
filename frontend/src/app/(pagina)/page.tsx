"use client";
import ProdutoItem from "@/components/produto/ProdutoItem";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";


import useProdutos from "@/data/hooks/useProdutos";

export default function Home() {
 
 
 
  const { produtos } = useProdutos();

  return produtos.length ? (
    



    <div className="flex flex-1 flex-col container gap-5 py-10">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {produtos.map((produto: any) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  
  ) : (
    <ProdutoNaoEncontrado semBotaVoltar />
  );
}
