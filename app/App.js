import { Loader } from './components/Loader.js';
import { Router } from './components/Router.js'

export function App(){
    const $app=document.getElementById('app');
    
    $app.appendChild(Loader());

    //Pantalla de Loader
    setTimeout(()=>{
        $app.innerHTML=null
        Router()
    },3000)
    return $app;
}