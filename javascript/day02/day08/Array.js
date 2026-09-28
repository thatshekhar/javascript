// find :- if the condition is then it will give only one reult 
//give undefined if condition is not me 
let arr11 = [1,2,3,4,5];
let res = arr11.find((num)=>{
    return(num>2);
})
console.log(res);
//spread operator:- spread operator is used to merge and copy array
let arr12 =[1,2,3,4];
let arr13 =[5,6,7,8];
let ress = [...arr12,...arr13];
console.log(ress)

// rest operator:- rest operator is used to multiple values in a single array
function showdetails(name, ...hobbies){
    console.log(name);
    console.log(hobbies)
}
showdetails("shekhar","cricket","football",)

// closure:- inner function remember the variable value of the outer function is known as closure 

function outer(){
    let message = "hello";
    function inner(){
        console.log(message)
    }
    inner()
}
outer()