
// function aFunction(a){
//     console.log("hello "+a);
// }

// var bFunction= function(name, printName){
//     printName(name);
// }

// bFunction("huy",aFunction);

// //Callback

// function add5(getNumber,printNumer){
//     var num=getNumber() + 5;
//     printNumer(num);
// }

// function randomNumber(){
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num){
//     console.log(num);
// }

// setTimeout(function(){add5(randomNumber, printNumber);},1000*3);

// //add5(randomNumber, printNumber);
// //function scope
// var a = 10;
// function abc(){
//     var b = 15;
//     console.log(a);
//     console.log(b);
// }

// abc();

//console.log(a);
//console.log(b);
// function printNum(num, waitTime){
//     setTimeout(function(){
//         console.log(num);},
//         (waitTime)*1000
// )}

function coutdown(num){
    var i = num;
    for(let i= num; i>0;i--){
        setTimeout(function(){
            console.log(i);},
            (num-i)*1000)
    }}

coutdown(5);

//BlockScope
