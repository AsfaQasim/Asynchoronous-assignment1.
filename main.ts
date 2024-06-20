//     TASK 1
        // settimeout 

console.log("Sir Hamza Alvi is the best teacher");
setTimeout(() => {
    console.log("We are the student of both teacher!");
    
}, 2000);
console.log("Miss Manaheel jamil  is a good teacher");

//     TASK 2
       // Settimeout 
       console.log("We are the student of GIAIC")
       setTimeout(() => {
        console.log("The more you learn the more you earn.");
        
       },);
       console.log("Sir Hamza Alvi Said");  // What is the output of the following code ?
       
       // TASK 3
    //    // SET INTERVAL
      let count = 0
      let a =  setInterval(() => {
        count ++
        console.log(`${count}. Asifa Qasim`);
        if(count >= 5){
            clearInterval(a)
        }
       }, 2000)
       

                  // TASK 4 
                 // Promises
let func = (myMarks: number) => {
return  new Promise ((resolve,reject) => {
    setTimeout(() =>{
        if(myMarks >= 80){
        resolve("Here is a success")
        
    }
    else 
    {
        reject("Here is a failure")
    }
}, 2000)
})
}
func(80).then((res) => console.log(res)).catch((err) => console.log(err));

     // TASK 5
//     Fetch

let func1 = async() => {
  let url =  "https://jsonplaceholder.typicode.com/posts/1"
  let fetchData = await fetch(url)
  let res = await  fetchData.json()
  console.log(res);
  }
  func1()

