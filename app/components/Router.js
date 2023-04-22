import { cardOption } from "./CardOption";

export async function Router(){
    const $app=document.getElementById("app");
    const $options=document.createElement("div")
    $options.className='options'
    $app.innerHTML=null;
    let {hash}=location;
    
    if(!hash || hash==="#/"){
        $options.innerHTML=null
        $options.appendChild(cardOption('Crear experiencia','Esperientzia sortu'))
        $options.appendChild(cardOption('Buscar experiencia','Esperientzia bilatu'))
        $app.appendChild($options)
    }else if( hash==='#/login'){

    }
}