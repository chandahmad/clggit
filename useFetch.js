// // function sum(a, b) {
// //   return a + b;
// // }
// // function sumWithMsg(clbk,msg){
// //    const result=clbk(20,40);
// //    console.log(msg+":" + result);
// // }
// // sumWithMsg(sum,"Hey calculation with js");


// // function login(msg,error){
// //     if(error){
// //         console.log("first");
// //     }
// //     else{
// //         console.log("second");
// //     }
// // }

// // function loginVerification(username,password,clbk){
// //     if(username==="0325" && password==="0325"){
// //         clbk("Login successful",null);
// //     }
// //     else{
// //         clbk(null,"Invalid username or password");
// //     }
// // }
// // loginVerification("0325","0325",login)
// // // Callback function

// // function checkNumber(num, clbk) {
// //     clbk(num);
// // }
// // function oddEven(num) {
// //     if (num % 2 === 0) {
// //         console.log(num + " is Even");
// //     } else {
// //         console.log(num + " is Odd");
// //     }
// // }
// // checkNumber(7, oddEven);

// // console.log("first");
// // for(i=0;i<10000;i++){
// //     console.log(second);
// // }
// // console.log("third");

// setTimeout(()=> {
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                             setTimeout(()=>{
//                                 setTimeout(()=>{
//                                     console.log("Hello");
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
// // console.log("Start");

// // setTimeout(() => {
// //     console.log("Hello");
// // }, 1000);

// // console.log("End");




// const div=document.getElementById('container')
// const button=document.getElementById('btn')
// // console.log(div);
// const h2=document.createElement('h2');
// h2.innerText="Hello Using DOM";
// // div.appendChild(h2);
// console.log(h2);
// async function display(){
// div.appendChild(h2);
// // div.innerHTML='<h2>Hello Using DOM</h2>';
// try {
// const serverdata=await fetch('https://fakestoreapi.com/products');
//             const jsonData= await serverdata.json();
//             // console.log(jsonData[1].title)
//             div.innerHTML=`<h2>${jsonData[1].title}</h2>`;

// }catch(error){
//     console.log("Error is: ", error);
// }
// finally{
//     div.appendChild(h2);
// }
// }
// button.addEventListener('click',display);



// const div = document.getElementById('container');
// const button = document.getElementById('btn');
// console.log(div);
// const h2 = document.createElement("h2");
// h2.innerText = "Data is loading...";
// console.log(h2);

// async function display(){
//     try{
//     div.appendChild(h2);
//         // div.innerHTML='<h2 style="color:blue;">Hello Using DOM</h2>';
//     const serverdata =await fetch('https://fakestoreapi.com/products');
//     const jsondata = await serverdata.json();
//     // console.log(jsondata[1].title)
//     // div.innerHTML=`<h2 style="color:white;background-color:grey;"> ${JSON.stringify(jsondata)}</h2>`;
// let table = `<table>
// <tr><th>item_id</th><th>title</th><th>Item_price</th></tr>
// ${jsondata.map((item) => {
//     return `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.price}</td></tr>`;
// }).join('')}
// </table>`;
// }catch(e){
//     console.log("error is:" + e);
// }
// finally{
// div.removeChild(h2);
// }
// }

// button.addEventListener('click',display);



const div = document.getElementById('container');
const button = document.getElementById('btn');
console.log(div);
const h2 = document.createElement("h2");
h2.innerText = "Data is loading...";
console.log(h2);
function cart(ele){
    alert("Item added to cart: " + ele.id);
}

async function display(){
    try{
    div.appendChild(h2);
        // div.innerHTML='<h2 style="color:blue;">Hello Using DOM</h2>';
    const serverdata =await fetch('https://fakestoreapi.com/products');
    const jsondata = await serverdata.json();
    // console.log(jsondata[1].title)
    // div.innerHTML=`<h2 style="color:white;background-color:grey;"> ${JSON.stringify(jsondata)}</h2>`;

    let table = `<table border=4px>
        <tr>
        <th>image</th>
        <th>itemId</th>
        <th>itemTitle</th>
        <th>itemPrice</th>
        <th>Action</th>
        </tr>
        ${
            jsondata.map((ele)=>(
            `<tr>
            <td><img src = ${ele.image} heigth = 80 width = 80></td>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.price}</td>
            <td><button onclick="cart()">Add to Cart</button></td>
            </tr>`
            ))
    }
    </table>`
    div.innerHTML = table;

}catch(e){
    console.log("error is:" + e);
}
finally{
div.removeChild(h2);
}
}

button.addEventListener('click',display);


