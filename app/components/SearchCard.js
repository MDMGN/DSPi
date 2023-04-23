export function SearchCard(props){
    let {id,establishmentEs,establishmentEu} =props;
    return`
        <article class="post-card">
        <h2>${establishmentEs}</h2>
        <p>
            <a href="#/${establishmentEu}" data-id="${id}">${establishmentEu}</a>
        </p>
        </article>
    `;
}