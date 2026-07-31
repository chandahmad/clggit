// function sum(a, b) {
//   return a + b;
// }
// function sumWithMsg(clbk,msg){
//    const result=clbk(20,40);
//    console.log(msg+":" + result);
// }
// sumWithMsg(sum,"Hey calculation with js");


// function login(msg,error){
//     if(error){
//         console.log("first");
//     }
//     else{
//         console.log("second");
//     }
// }

// function loginVerification(username,password,clbk){
//     if(username==="0325" && password==="0325"){
//         clbk("Login successful",null);
//     }
//     else{
//         clbk(null,"Invalid username or password");
//     }
// }
// loginVerification("0325","0325",login)
// // Callback function

// function checkNumber(num, clbk) {
//     clbk(num);
// }
// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkNumber(7, oddEven);

// console.log("first");
// for(i=0;i<10000;i++){
//     console.log(second);
// }
// console.log("third");

setTimeout(()=> {
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    console.log("Hello");
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
// console.log("Start");

// setTimeout(() => {
//     console.log("Hello");
// }, 1000);

// console.log("End");