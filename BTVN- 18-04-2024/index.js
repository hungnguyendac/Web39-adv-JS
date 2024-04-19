// Bai 1
let cau_1 = (arr) => {
    let counts = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (counts[num] > 1) {
            arr.splice(i, 1);
            i--;
            counts[num]--;
        }
    }

    return arr;
};

let array = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];
console.log(array);
console.log(cau_1(array));
console.log("----------------------------------------------------------------");

// Bai 2

let cau_2 = (arr) => {
    let findSecondLargest = (arr) => {
        arr.sort((a, b) => b - a);
        return arr[1];
    }

    let sortArray = (arr, order) => {
        if (order === "ascending") {
            return arr.sort((a, b) => a - b);
        } else if (order === "descending") {
            return arr.sort((a, b) => b - a);
        } else {
            return "Invalid order. Please specify 'ascending' or 'descending'.";
        }
    }

    let sumOfEvenNumbers = (arr) => {
        let sum = 0;
        for (let num of arr) {
            if (num % 2 === 0) {
                sum += num;
            }
        }
        return sum;
    }

    return {
        secondLargest: findSecondLargest(arr),
        sortedArrayAscending: sortArray([...arr], "ascending"),
        sortedArrayDescending: sortArray([...arr], "descending"),
        sumOfEven: sumOfEvenNumbers(arr),
    };
};

let array_1 = [3, 5, 1, 7, 4, 6, 8, 2];
console.log(array_1);
let operationsResult = cau_2(array_1);

console.log("Số lớn thứ hai trong mảng:", operationsResult.secondLargest);
console.log(
    "Mảng sau khi sắp xếp tăng dần:",
    operationsResult.sortedArrayAscending
);
console.log(
    "Mảng sau khi sắp xếp giảm dần:",
    operationsResult.sortedArrayDescending
);
console.log("Tổng các số chẵn trong mảng:", operationsResult.sumOfEven);
