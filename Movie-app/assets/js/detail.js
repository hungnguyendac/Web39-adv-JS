// B1: GET id Movie

let params = new URLSearchParams(document.location.search);

let id = params.get('id');

console.log(id);