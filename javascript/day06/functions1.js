// add two numbers
function addnumbers(a, b) {
console.log(a + b)
}
addnumbers(10, 20)

// even odd number
function evenodd(num) {
    if (num % 2 == 0) {
        console.log("Even number")
    } else {
        console.log("Odd number")
    }
}
evenodd(15)

// findmax of three numbers
function findmax(a, b, c) {
    if(a > b && a > c){
      console.log(a)  
    }
    else if (b>a && b>c){
        console.log(b)
    }
    else {
        console.log(c)
    }
}
findmax(2,5,1)

// function expression multiply that multiplies two numbers and returns the result

let Exp = function(n){

    let rev = 0;
    let original = n
    while(n>0){

        let digit = n%10;
        rev= rev*10+digit;
        n=Math.floor(n/10);


    }
    return original===rev ? "Palindrome" : "Not Palindrome"
    
} 
console.log(Exp(123));

