export function SearchCard(props){
    let {id,typeEs,typeEu} =props;
    return`
        <article class="post-card">
        <h2>${typeEs}</h2>
        <p>
            <a href="#/${typeEs}" data-id="${id}">${typeEs}</a>
        </p>
        </article>
    `;
}