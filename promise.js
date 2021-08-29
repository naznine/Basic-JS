const myPromise = new Promise((resolve,reject)=>{
    let serverResponse=true ;
    if(serverResponse){
        resolve("We got data")
    }
    else{
        reject("Data can not found")
    }
})

myPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})