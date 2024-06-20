"use strict";
//     TASK 1
// settimeout 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log("Sir Hamza Alvi is the best teacher");
// setTimeout(() => {
//     console.log("We are the student of both teacher!");
// }, 2000);
// console.log("Miss Manaheel jamil  is a good teacher");
//     TASK 2
// Settimeout 
//    console.log("We are the student of GIAIC")
//    setTimeout(() => {
//     console.log("The more you learn the more you earn.");
//    },);
//    console.log("Sir Hamza Alvi Said");  // What is the output of the following code ?
// TASK 3
//    // SET INTERVAL
//   let count = 0
//   let a =  setInterval(() => {
//     count ++
//     console.log(`${count}. Asifa Qasim`);
//     if(count >= 5){
//         clearInterval(a)
//     }
//    }, 2000)
// TASK 4 
// Promises
// let func = (myMarks: number) => {
// return  new Promise ((resolve,reject) => {
//     setTimeout(() =>{
//         if(myMarks >= 80){
//         resolve("Here is a success")
//     }
//     else 
//     {
//         reject("Here is a failure")
//     }
// }, 2000)
// })
// }
// func(80).then((res) => console.log(res)).catch((err) => console.log(err));
// TASK 5
//     Fetch
let func = () => __awaiter(void 0, void 0, void 0, function* () {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    let fetchData = yield fetch(url);
    let res = yield fetchData.json();
    console.log(res);
});
func();
