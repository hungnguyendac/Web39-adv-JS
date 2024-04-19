let API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1%27";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";


// B1: GET id Movie
let params = new URLSearchParams(document.location.search);
let idDetail = params.get('id');
let id = params.get("id");

console.log(id);

// Truy cap phan tu
let tittleMovie = document.querySelector(".tittle-movie")
let imgDetail = document.querySelector(".image-detail-js");


const getAPI = async (url) => {
    let response = await axios.get(url);
    
    showDetails(response.data.results)
};

getAPI(API_URL);

// Hien thi chi tiet bo phim voi api
const showDetails = (data) => {
    let detail = data.filter(item => {
        return item.id == idDetail
    })

    tittleMovie.innerHTML = ` <h1>${detail[0].original_title}</h1>`;
    imgDetail.innerHTML = `<img src="${IMG_PATH + detail[0].poster_path}" alt="ảnh movie" >`;

    console.log(detail);
}