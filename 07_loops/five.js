const coding = ["java","ruby","js","cpp"];

// coding.forEach( function (item){
//     console.log(item);
// }
// )

// coding.forEach(  (value) =>{
//     console.log(value);
// }
// )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index, arr)=>{
//     console.log(item, index, arr);
// })

let myCoding = [
    {languageName : "javascript",
    languageFileName :".java"},

    {languageName : "javascript",
    languageFileName :".js"},

    {languageName : "python",
    languageFileName :".py"},

   
    {languageName : "C++",
    languageFileName :".cpp"},
]

myCoding.forEach((item) =>{ 
    console.log(item.languageName);
})
