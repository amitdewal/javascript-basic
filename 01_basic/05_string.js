//string data types in js

const name = "amit";
 const repocount = 50;

 //old school concate
 //console.log(name + repocount + "value");

 //new style of string concat
 console.log(`hello my name is ${name} and my repo count is ${repocount}`);


 const gameName = new String("amit dewal");
 console.log(gameName);

 const strDemo = "abcdef";
 console.log(strDemo.length);
 console.log(strDemo.toUpperCase());
 console.log(strDemo.substring(0,3));
 console.log(strDemo.slice(-8,3));// negatice index means start from last in slice method
 const url = "https://amit.com/amit%30dewal";
 console.log(url.replace("%30","-"));
 

 console.log(url.includes("dewal"));