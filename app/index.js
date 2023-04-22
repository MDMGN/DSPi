import '../style.css'
import { App } from "./App";
import api from './helpers/api';

//Renderizamos dentro del index.html
document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",(e)=>{
    api.page=1;
    App();
});