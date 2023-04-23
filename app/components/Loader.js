export function Loader(){
    const loader=document.createElement("header");
    loader.innerHTML=
    `
        <div>
          <p class="header__text1">
            ¡Bienvenido
            <span>a GSPI!</span>
          </p>
          <p  class="header__text2">
            Ongi Etorri EkOGO!
          </p>
        </div>
        <img src="./logo.png" alt="logo-EkOGO" class="logo">
    `;
    return loader;
}