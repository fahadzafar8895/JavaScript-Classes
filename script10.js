// console.log('Hello one')
// for (let index = 0; index < 1000; index++) {
//     const element = index;
//     console.log("index" , element)  
// }
// console.log('hello two')

// console.log('Hello one')
// setTimeout(()=>{
//     for (let index = 0; index < 1000; index++) {
//         const element = i;
//         console.log("index" , element)  
//     }
// } )
// console.log("Hello three")


let userLogin = false
let P = new Promise((resolve , reject)=>{
    if(userLogin){
        resolve([1 , 2 , 4])
    }else{
        reject(new Error("Plz loggin"))
    }
})

P.then((x)=>{
    console.log("Resolve data" , x)
}).catch((error)=>{
    console.log(error)
    alert('plx loggin')
})