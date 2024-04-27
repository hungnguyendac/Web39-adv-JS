let fetchDataWithRetry = async (url, maxRetries) => {
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(
                    "Yêu cầu không thành công với status: " + response.status
                );
            }

            return await response.json();
        } catch (error) {
            retries++;
            console.error("Lỗi:", error.message);
            console.log(`Thử lại... (${retries}/${maxRetries})`);

            await new Promise((resolve) => setTimeout(resolve, 1000)); // Chờ 1 giây trước khi thử lại
        }
    }

    throw new Error(`Số lần thử tối đa (${maxRetries}) lần`);
}

let fetchData = async() => {
    try {
        const data = await fetchDataWithRetry(
            "https://jsonplaceholder.typicode.com/posts/1",
            3
        ); // Thử lại tối đa 3 lần
        console.log("Dữ liệu:", data);
    } catch (error) {
        console.error("Lỗi:", error.message);
    }
}

fetchData();
