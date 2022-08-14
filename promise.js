a=10;
b=0;

let waiting = new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        b=20;
        resolve(b);
    },2000)
})

waiting.then((data)=>{
    b=data;
    console.log(a+b);
})