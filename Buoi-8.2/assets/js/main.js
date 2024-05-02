import { data } from './data.js'

let ulEl = document.querySelector('ul');

let HTML = ``

data.forEach( (value) => {
    HTML =
        HTML +
        `
    <li>
        <a href="../../detail.html?id=${value.id}">
            ${value.name}
        </a>
    </li>
    `;
})

ulEl.innerHTML = HTML