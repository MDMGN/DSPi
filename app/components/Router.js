import { cardOption } from "./CardOption";
import { SearchForm } from "./SearchForm";
import api from "../helpers/api";

export async function Router(){
    const $app=document.getElementById("app");
    const $options=document.createElement("div")
    $options.className='options'
    $options.innerHTML=null
    $app.innerHTML=null;
    let {hash}=location;
    
    if(!hash || hash==="#/"){
        const search_event={
            endpoint:'search',
            title:'Crear experiencias',
            title_eus:'Esperientzia sortu'
        }, create_event={
            endpoint:'create',
            title:'Crear experiencias',
            title_eus:'Esperientzia bilatu'
        }
        
        $options.appendChild(cardOption(search_event))
        $options.appendChild(cardOption(create_event))
        $app.appendChild($options)
    }else if(hash.includes('#/search')){
        $app.appendChild(SearchForm())
        let query=localStorage.getItem("apiSearch");
        if(!query){
            document.querySelector(".loader").style.display="none";
            return false
        };
        await ajax({
            url:`${api.TYPE}}`,
            cbSuccess:(types)=>{
                let html="";
                if(search.length===0){
                    html=`
                    <p class="error">
                        No existen resultados de búsqueda para el término
                        <mark>${query}</mark>
                    </p>
                    `;
                }else{
                    search.forEach(post => html+=SearchCard(post));
                }
                document.getElementById("main").innerHTML=html;
            }
        });
    }
}