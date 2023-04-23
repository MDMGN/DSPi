import { getEventId } from "../helpers/getEventByType";

export function SearchForm(){
    const $form=document.createElement("form"),
    $input=document.createElement("input");
    $form.classList.add("search-form");
    $input.name="search";
    $input.type="search";
    $input.placeholder="Buscar...";
    $input.autocomplete="off";
    $form.appendChild($input);
    if(location.hash.includes("#/search")) $input.value=localStorage.getItem("apiSearch");

    document.addEventListener("search",(e)=>{
        if(!e.target.matches("input[type='search']")) return false;
        if(!e.target.value) localStorage.removeItem("apiSearch");
    });

    document.addEventListener("submit",(e)=>{
        e.preventDefault();
        if(!e.target.matches(".search-form")) return false;
        console.log(e.target.search.value)
        getEventId(e.target.search.value)
    });

    return $form;
}