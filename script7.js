//loops

let number = [1 , 2 ,4 ,5 , 7]
for (let i = 0; i <= number.length; i++) {
    console.log('itration of i ' , i , number[i])   
}

//while loop
let count = 0;
while (count < 10) {
console.log(count , "number of itraction"); 
count++;
}

// Do while loop
let index = 0;
do {
console.log(index); // 0
index++;
} while (index < 29);



const products = [
{ name: "Laptop", price: 1200 },
{ name: "Mouse", price: 25 },
{ name: "Keyboard", price: 75 },
{ name: "stand", price: 45 },
];
    //cre var   condition
for (let j = 0; j < products.length; j++) {
console.log(`${products[j].name}: $${products[j].price}`);
}

