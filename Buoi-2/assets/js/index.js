// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

// Thực hiện đồng thời các công việc 1 cách tuần tự

// const work1 = (name, callback) => {
//     console.log("Bat dau thuc hien cac cong viec");
//     console.log("Lam bai tap xong");

//     setTimeout(() => {
//         callback();
//     }, 3000);
// };
// const work2 = (name, callback) => {
//     console.log("Thuc hien cong viec " + name);

//     setTimeout(() => {
//         callback();
//     }, 4000);
// };

// const work3 = (name) => {
//     console.log("Thuc hien cong viec " + name);

//     setTimeout(() => {
//         console.log("Làm xong hết công việc");
//     }, 5000);
// };

// // Promise
// let money = 10000;

// let buyIphone = new Promise((resolve, reject) => {
//     if (money > 35) resolve("MuA AIPHONE THÔI");
//     else {
//         reject("kiếm tiền đê")
//     }
// });

// // Khởi tạo promise
// let buyWatch = new Promise((resolve, reject) => {
//     if (money - 35 -4 >= 40) 
//     {
//         resolve("Bạn có thể mua thêm Apple Watch")
//     }
//     else {
//         reject("Không đủ tiền :))")
//     }
// });

// // Thực thi promise
// buyIphone
//     .then((res) => {
//         console.log(res);

//         // Mua apple watch
//         return buyWatch;
//     })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//         return buyWatch;
//     })

//     .catch((err) => {
//         console.log(err);
//     })

//     .finally(() => {
//         console.log("Đi về nhà");
//     });


// Async function
let hello = async() => {
    return Promise.resolve("Hello 500 anh em")
}

// hello()
hello()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })