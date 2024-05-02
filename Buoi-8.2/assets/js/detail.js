import {data} from './data.js'

// Get id

let params = new URLSearchParams(document.location.search);
let id = params.get('id');

console.log(id);

// Phân biệt được là mình đang ở trang detail -> filter (data)

const detail = data.filter( item => {
    return item.id == id;
})

// Đổ dữ liệu ra
let spanEL = document.querySelector('span')
spanEL.innerHTML = detail[0].name