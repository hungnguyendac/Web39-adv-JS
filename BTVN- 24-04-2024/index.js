let fetchDataWithTimeout = async (url, timeout) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    "Request failed with status: " + response.status
                );
            }

            const data = await response.json();

            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};

const URL = "https://jsonplaceholder.typicode.com/posts/1";

let fetchData = async () => {
    try {
        const data = await fetchDataWithTimeout(URL, 5000);
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

fetchData();
