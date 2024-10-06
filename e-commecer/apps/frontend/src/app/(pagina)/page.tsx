'use client'
import ProdutoItem from '@/components/produto/ProdutoItem'
import useProdutos from '@/data/hooks/useProdutos';



export default function Home() {
  const { produtos } = useProdutos()
  
  return (

<div className="grid grid-cols-3 xl:grid-cols-4 gap-5 container">
    {produtos.map((produto:any) => (
        <ProdutoItem key={produto.id} produto={produto} />
    ))}
</div>

  
  

  );
}
