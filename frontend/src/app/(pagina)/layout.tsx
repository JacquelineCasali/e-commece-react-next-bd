import Pagina from "@/components/template/Pagina";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";




export default function Layout(props : any) {
  return(
    <ProvedorCarrinho>
 <Pagina>{props.children}</Pagina>
 </ProvedorCarrinho>
  ) 
  
  
 
  
}
