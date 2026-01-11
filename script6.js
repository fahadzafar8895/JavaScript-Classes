///functions
function studentDetails(name , phone , Address){
    return (`The Name of Student ${name} and his phone number is ${phone}. he is from ${Address}`)
}

let user1 = studentDetails('Fahad' , 428348237 , 'Gilgit')
console.log(user1)
let user2 = studentDetails('Ali' , 6934792 , "Panjab")
console.log(user2)


function Multp(a , b){
    return a * b
}
let num1 = Multp(2 , 5)
console.log(num1)

//arrow functions

let function1 = (a , b)=>{
    return a + b
}
console.log(function1(6 , 6))

let user = false;
let function2 = (user)=>{
    if(user){
        return 'user was loggin'
    }else{
        return 'sorry plx loggin.'
    }
}
let webUSer1 =function2(user)
console.log(webUSer1)