let API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1%27";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const getAPI = async (url) => {
    try {
        let response = await axios.get(url);
        showMovie(response.data.results);
    } catch (error) {
        console.log(error);
    }
};

getAPI(API_URL);

// B2: Show Movies to HTML
const showMovie = (data) => {
    let HTML = ``;

    console.log(data);

    data.forEach((value) => {
        HTML += `
            <div class="col-12 col-sm-6 col-md-3">
                <div class="wrap-movie">
                    <a href="./detail.html?id=${value.id}">
                        <div class="box-images">
                            <img
                                src="${IMG_PATH + value.poster_path}"
                                alt="Ten anh"
                            />
                        </div>
                        <div class="box-info">
                            <h3>${value.title}</h3>
                            <p class="rating">${value.vote_average}</p>
                        </div>
                        <div class="over-view">
                            <h4>Overview</h4>
                            <p class="description">
                                ${value.overview}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });

    rowJS.innerHTML = HTML;
};

let rowJS = document.querySelector(".row-js");
