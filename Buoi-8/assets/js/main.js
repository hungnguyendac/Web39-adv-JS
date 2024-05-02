// const persion = {
//     name: 'Nguyen Van A',
//     age: 25,
//     info: function() {
//         console.log(this);
//         console.log(1);
//         return this.name + "" + this.age;
//     }
// }

// console.log(persion.info());


// Rest parameters voi function

// const sum = (...numbers) => {
//     // console.log(numbers);
//     let total = 0
//     numbers.forEach(number => total = total + number)
//     return total
// };

// console.log(sum(2, 3, 4, 20, 1));

// Rest parameters voi Destructuring
// const arr = [1, 2, 3, 4, 5, 6, 7]

// const [a,b, ...number] = arr

// console.log(number);

// console.log(arr);


// Spread Operators
const arr_1 = [1, 2, 3, 4, 5]

console.log(...arr_1);

const arr_2 = [...arr_1, 6 ,7]

console.log(arr_2);