import '../style.css'
import { App } from "./App";
import api from './helpers/api';
import { Loader } from './components/Loader';

//Renderizamos dentro del index.html
document.addEventListener("DOMContentLoaded",()=>{
    const $app=document.getElementById('app');
    $app.appendChild(Loader());
    App()
});
window.addEventListener("hashchange",(e)=>{
    api.page=1;
    App();
});