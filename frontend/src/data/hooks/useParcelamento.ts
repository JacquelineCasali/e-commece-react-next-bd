import { QTDE_MAX_PARCELAS } from "@/core";
import { CalcularParcelamento } from "@/core/parcelamento";


export default function useParcelamento(valor:number,
    quantidade:number=QTDE_MAX_PARCELAS) {
  return new CalcularParcelamento().executar(valor,quantidade)
}
