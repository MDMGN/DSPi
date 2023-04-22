//https://api.euskadi.eus/culture/events/v1.0/events?_elements=20&_page=1
//https://opendata.euskadi.eus/api-culture/?api=culture_events&num=1#/event%20types/findEventTypes
// Configuramos los endpoints y nombre del sitio web para ser llamados en App.js
const NAME="api.euskadi",
    DOMAIN=`https://${NAME}.eus`,
    SITE=`${DOMAIN}/culture`,
    API_WP=`${SITE}/events/v1.0/`,
    PER_PAGE=9,
    EVENTS=`${API_WP}/events?_elements=${PER_PAGE}&_pag=`,
    TYPES=`${API_WP}/events/byType/1?_elements=20&_page=1`,
    TYPE=`${API_WP}/eventType`;
    let page=1;
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    EVENTS,
    TYPE,
    TYPES,
    PER_PAGE,
    page
};