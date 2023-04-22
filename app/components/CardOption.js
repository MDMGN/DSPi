export function cardOption(title='',title_eus=''){
    const cardOption=document.createElement('div')
    cardOption.className='options__cards'
    cardOption.innerHTML=
    `
    <p>
      <span>${title}</span>
      <span>${title_eus}</span>
      <span>+</span>
    </p>
    `
    return cardOption;
}