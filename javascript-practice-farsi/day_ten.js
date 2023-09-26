// document.write('hello')

// setTimeout(() =>{
//     document.write("inside")
// },2000)

// document.write('world')




// const add = ((a,b)=>
// {
//     return a+b
// },()=> {
//     document.write('this is a add function <br>')
// })

// document.write(add(33,333))



// logger()
// document.write(1,"<br>")
// document.write(4,"<br>")
// document.write(5,"<br>")

// function logger()
// {
//     document.write(2,"<br>")
//     finsh()
//     document.write(3,"<br>")
//     function finsh()
//     {
//         document.write('finsh',"<br>")
//     }
// }


// function one()
// {
//     document.write(1,"<br>")
// }
// function two()
// {   
//     document.write(2333,"<br>")
//     setTimeout(() => {
//         document.write(2,"<br>")
//     }, 5000);
// }


// function three()
// {
//     document.write(3,"<br>")
// }


// one()
// two()
// three()

// function callback()
// {
//     setTimeout(() => {
//         let name = 'jan';
//         document.write('this is the first name ',name,"<br>")
//         setTimeout(() => {
//             name = 'gul'
//             document.write('this is the second name ',name,"<br>")
//         }, 1000);
//     }, 500);
    
// }


// callback()

// const btn = document.querySelector('#btn');
// const body = document.querySelector('body');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click',()=>{
//         setTimeout(() => {
//             body.style.backgroundColor  = 'black';
//             btn.style.display = 'none';
//             setTimeout(() => {
//                 body.style.backgroundColor  = 'red';
//                 setTimeout(() => {
//                     body.style.backgroundColor  = 'green';
//                     setTimeout(() => {
//                         body.style.backgroundColor  = 'white';
//                         btn.style.display = 'block';
//                     }, 1000);

//                 }, 1000);
//             }, 1000);
//         }, 1000);
//         // h1.innerHTML = 'jan'
//     })
    
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const promis = new Promise((resolve, reject) => {
    // resolve('the promise is resolved')
    reject('the promise is rejected')
})

promis
.then(()=>
{
    btn.addEventListener('click',()=>
    {
        body.style.backgroundColor = 'green';
    })

})
.catch(err =>{
    btn.addEventListener('click',()=>
    {
        body.style.backgroundColor = 'red';
    })
})

.finally(()=>{
    body.style.backgroundColor = 'orange';
})




