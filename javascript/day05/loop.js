// let n = 20;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

let n = 2984;
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}

console.log("Sum of digits =", sum);