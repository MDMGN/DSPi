import api from "./api.js";
import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";

export async function InfiniteScroll(){
    let query=localStorage.getItem("wpPostSearch"),
    apiURL,
    Component;//High Order Component
    window.addEventListener("scroll",async(e)=>{
        let {scrollTop,clientHeight,scrollHeight}=document.documentElement,
        {hash}=window.location;
        /* console.log(scrollTop,clientHeight,scrollHeight,hash); */
        if(scrollTop + clientHeight >= scrollHeight){
            api.page++;
            if(!hash || hash==="#/"){
                apiURL=`${api.POSTS}&page=${api.page}`;
                Component=PostCard;
            }else if(hash.includes("#/search")){
                apiURL=`${api.SEARCH}${query}&page=${api.page}`;
                Component=SearchCard;
            }else{
                return false;
            }

            document.querySelector(".loader").style.display="block";
            await ajax({
                url: apiURL,
                cbSuccess: (posts)=>{
                    let html="";
                    posts.forEach(post=> html+=Component(post));
                    document.getElementById("main").insertAdjacentHTML("beforeend",html);
                }
            });
        }
    });
}