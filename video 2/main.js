
function xinChao() {
    console.log("ta quang nhut")

}

xinChao();

function Sum(a, b) {
    return a + b;
}

console.log("tong la" + Sum(1, 2));

// dung function expression

let tong = function (a, b) {
    return a + b;
}

let kq1 = tong(2, 5);
console.log(kq1);

// arrow function

console.log("arrow function")

let phepTinh = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return sum + product;
}

console.log("ket qua la " + phepTinh(2, 3))

// tra ve 1 doi tuong

let person = (ten, tuoi) => {
    return {
        "ho va ten": ten,
        "so tuoi ": tuoi
    };
}
console.log(person("Nhut", 20))