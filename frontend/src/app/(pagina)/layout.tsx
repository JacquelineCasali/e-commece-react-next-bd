import Pagina from "@/components/template/Pagina";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
 import { ProvedorPagamento } from '@/data/contexts/ContextoPagamento'



export default function Layout(props : any) {
  return(
    <ProvedorCarrinho>
           <ProvedorPagamento>
           <Pagina>{props.children}</Pagina>
           </ProvedorPagamento>

 </ProvedorCarrinho>
  ) 
  
  
 
  
}
