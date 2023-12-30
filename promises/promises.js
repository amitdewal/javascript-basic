//promises in javascript


const promiseOne = new Promise(function (resolve, reject){

    //do an async task
    //DB callls

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function () {
    console.log("promise consumed");
})
    
new Promise(function (resolve, reject) {
    
})




