export function Event(props){
    const {descriptionEs,imageUrl}=props

    const $event=document.createElement('div')
    $event.innerHTML=
    `
    <img src="${imageUrl}" />
    <p>
        ${descriptionEs}
    </p>
    `
    return $event
}