// Gọi api từ local lên server 
// B1. Cài thư viện axios

let URL = `https://fakestoreapi.com/products`;

const getAPI = async(urlAPI) => {
    // console.log(urAPI);
    try {
        let response = await axios.get(urlAPI);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getAPI(URL)