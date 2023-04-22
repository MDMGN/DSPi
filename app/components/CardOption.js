export function cardOption({endpoint,title,title_eus}){
    const cardOption=document.createElement('div')
    cardOption.className='options__cards'
    cardOption.innerHTML=
    `
    <p>
      <span>${title}</span>
      <span>${title_eus}</span>
      <a href="#/${endpoint}">+</a>
    </p>
    `
    return cardOption;
}