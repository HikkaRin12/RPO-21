// // // // // // function welcome (name, callBack){
// // // // // //     callBack(name);
// // // // // // };
// // // // // // function sayHello(name){
// // // // // //     console.log(`Hello, ${name}`);
// // // // // // }
// // // // // // welcome(`Adil`, sayHello);
// // // // // /// callBack функция 

// // // // // //for each функция 
// // // // // array.forEach((index, element ) => {
// // // // //     console.log( index, element)
// // // // // }
// // // // // );

// // // // const fruits = ["apple", "banana", "orange"];
// // // // fruits.forEach((el, i) => {
// // // //     console.log(`${el} -это елемент; ${i} - это номер индекса;`);
// // // //     document.body.innerHTML = ` <ul>
// // // //                           <li> ${el}</li>
// // // //                                 </ul>`;
// // // // });

// // // const users =[
// // //     {id:1, name: "Adil", age:30, role:"admin"},
// // //     {id:2, name: " Farid", age:29, role:"support"},
// // //     {id:3, name: "Vlad", age:22, role:"sale"},
// // //     {id:4, name: " Alex", age:36, role:"user"},
// // //     {id:5, name: "Olena", age:32, role:"user"},
// // //     {id:6, name: "Liana", age:40, role:"user"},
// // //     {id:7, name: "Dima", age:27, role:"sale"},

// // // ];
// // // users.forEach(el =>{
// // //   console.log(`пользаватель ${el.name} имеет статус: ${el.role}`) ;  
// // //   if(el.role === "user"){
// // //     console.log(`Список людей у которыйх статус "user":${el.name} `)
// // //   }
// // // });

// // // const newUsers = users.map( ( el =>{
// // //     ...
// // // } ));

// // const products = ["хлеб", "Мололко", "йогурт", "Картофель"];
// // const newList = products.filter(product => product !== "йогурт"); 
// // console.log(newList);


// let initialTimer = 5;
// const interval = setInterval(() =>{
//     console.log(initialTimer);
//     initialTimer --;
//     if(initialTimer === 0){
//         console.log("Time Out!");
//         clearInterval(interval);

//     }
// }, 1000 );


const network = [
     {name: "Adile", post: "Hello"},
    {name: "Alex", post: "Good Day"},
    {name: "Farid",post:"Morning" },    
]
const posts = network .map(post => {
    `<div>${post.name}:
    ${post.post}</div>`
});