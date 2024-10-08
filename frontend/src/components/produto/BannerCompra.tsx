import { Produto } from "@/core";
import { Moeda } from "@/core/utils";
import useCarrinho from "@/data/hooks/useCarrinho";
import useParcelamento from "@/data/hooks/useParcelamento";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
export interface BannerCompraProps {
  produto: Produto;
}

export default function BannerCompra(props: BannerCompraProps) {
  const router = useRouter();
  const { adicionarItem } = useCarrinho()
  const { produto } = props;
  const parcelamento = useParcelamento(produto.precoPromocional);
  return (
    <div className="flex ">
      <div className="flex flex-col border-r border-zinc-500 pr-5 w-96 ">
        <div className="line-through text-zinc-400">
          de {Moeda.formatar(produto?.precoBase)}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500 ">
            {" "}
            {Moeda.formatar(produto?.precoPromocional)}
          </span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>

      <div className=" md:flex ">
        <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5 mb-3">
          <span className="text-base text-zinc-300">
            {parcelamento.qtdeParcelas} x de
          </span>

          {Moeda.formatar(parcelamento.valorParcela)}
        </div>
        <div className="flex gap-4 items-center   ">
          <button
            className="flex button bg-pink-600 rounded-full p-2 hover:bg-pink-800 ml-2 md:ml-20 "
            onClick={(e: any) => {
              e.preventDefault();
              adicionarItem(produto)
              router.push('/checkout/carrinho')
            }}
          >
            <IconShoppingCart size={20} />
            <span>Adicionar</span>
          </button>
          <button
            className="flex button bg-violet-700 rounded-full p-2  hover:bg-violet-900"
            onClick={(e: any) => {
              e.preventDefault();
     adicionarItem(produto)
    
              router.push("/checkout/pagamento");
            }}
          >
            <IconCreditCard size={20} />
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
