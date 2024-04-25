// Tìm hiểu LocalStorage

/*
    - Gồm 2 phần
        + Key : Do mình định nghĩa
        + Value: Giá trị mình cần lưu trữ & hiển thị ra

    - Các phương thức với LocalStorage
        + Khai báo 1 LocalStorage
            localStorage.setItem("key", "value");

        + Sử dụng LocalStorage
            localStorage.getItem("key");

        + Xóa 1 giá trị localStorage
            localStorage.removeItem("key");

        + Xóa tất cả giá trị đang có trong localStorage
            localStorage.clear();


        + Lưu ý:
            Value trong localStorage luôn luôn lưu dạng string
            -> Lưu thì phải ép kiểu JSON.stringify()
*/

// Lưu trữ 1 giá trị với nội dung "500 anh em lop web39!"

// Khai báo 1 giá trị LocalStorage
//localStorage.setItem("class", JSON.stringify([1,2,3]));

// Lấy về sử dụng
//let name = JSON.parse(localStorage.getItem("class"));

// Xóa
// localStorage.removeItem("class");

//console.log(name);


// ---------------------------------------
// Todo List
/*
    + Khi mình vừa mở app
        -> Hiển thị dự liệu cũ trong localStorage
        -> Đổi chỗ dữ liệu mới -> Hiển thị ra
*/

// B1: Truy cập phần tử

let forEl = document.querySelector("#form");
let inputEl = document.querySelector("#input");
let ulEL = document.querySelector("#todos");

// B2: Thiết kế db lưu trữ localStorage
// let data = [
//     {
//         name: "Ten cong viec 1",
//         completed: false,
//     },
//     {
//         name: "Ten cong viec 2",
//         completed: true,
//     },
// ];

// B2.1 : Lưu trữ ở trong localStorage
// localStorage.setItem("TODOS", JSON.stringify(data))

// B2.2: Gọi dữ liệu trong localStorage ra
let todos = JSON.parse(localStorage.getItem("TODOS"));
// console.log(todos);

// B3: Kiểm tra xem dữ liệu mình gọi ra có tồn tại không
    // Tồn tại -> Hiển thị ra
    // K tồn tại -> Đợi người dùng nhập vào và cùng hiển thị ra


// Update localStorage
const updateLS = () => {
    let allLiEl = document.querySelectorAll('li')

    const listTodos = [];

    allLiEl.forEach( (item) => {
        // item: từng cái thẻ li

        listTodos.push(
            {
                name: item.innerHTML,
                completed: item.classList.contains("completed") 
            }
        );
    });

    // Lưu mảng vào localStorage
    localStorage.setItem("TODOS", JSON.stringify(listTodos) );
};


// Hien thi tung cong viec ra ngoai UI
const showTodo = (data) => {
    let todoName = inputEl.value;

    if (data) {
        todoName = data.name; // Ten cong viec
    }

    if (todoName) {
        // Tao ra the <li></li> -> show cong viec
        let liEL = document.createElement("li");

        // Check trang thai cua cong viec
        if (data && data.completed == true) {
            liEL.classList.add("completed");
        }

        // Click chuot trai thi thay doi trang thai cong viec
        liEL.addEventListener("click", () => {
            liEL.classList.toggle("completed")
            updateLS();
        });

        // Click chuot phai, remove the di
        liEL.addEventListener("contextmenu", () => {
            liEL.remove();
            updateLS();
        })

        liEL.innerHTML = todoName; // Them noi dung cho the li
        ulEL.appendChild(liEL);

        inputEl.value = ''; // Xóa nội dung o input khi thêm 1 cv mới
        updateLS();

    }

}

if (todos) {
    todos.forEach(value => {
        showTodo(value);
    });
}

forEl.addEventListener("submit", (e) => {
    e.preventDefault();
    showTodo()
})