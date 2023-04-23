import {ajax} from './ajax.js'
export function getEventId(name=''){
    //Limpieza de entrada para el nombre en la busqueda
    name=name
    .charAt(0)
        .toLocaleUpperCase()+name.substring(1,name.length,name)
        .trim()

        ajax(
            {
                url:'https://api.euskadi.eus/culture/events/v1.0/eventType',
                cbSuccess:eventTypes=>{
                    eventTypes.forEach(eventType => {
                        /* ) console.log(name.id) */
                        if(Object.values(eventType).includes(name)){
                            localStorage.setItem("apiSearch",eventType.id.toString());
                            location.hash=`#/search?search=${name}`;
                            console.log(localStorage.getItem('apiSearch'))
                        }
                    });
                }
            })
}   