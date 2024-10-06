import Footer from "./Footer";
import Hearder from "./Hearder";
export interface PaginaProps{
  className?:string
  children?:any
}

export default function Pagina(props:PaginaProps) {
  return (
    <div
    className="flex flex-col min-h-screen"
    style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)',
    }}
>      <div
                className="flex-1 flex flex-col w-screen"
                style={{ background: 'url("/background.png")' }}
            >
                 <Hearder />
      <main className={`flex-1 flex flex-col py-6 container
      ${props.className??''}
      `}
      
      >{props.children}</main>
   <Footer/>
               </div>
   
    </div>
  )
}
