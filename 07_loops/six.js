//const coding = ["java","ruby","js","cpp"];

const myNums = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
// const values = myNums.filter((num)=>
// {
//    return  num > 4}
//     )

// const newNums = [];

// myNums.forEach((item) =>{
//     if( item > 4){
//         newNums.push(item);
//     }
// })

// console.log(newNums);

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
  },
  {
    title: "Pride and Prejudice",
    genre: "Classic",
    publishYear: 1813,
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997,
  },
  {
    title: "The Shining",
    genre: "Horror",
    publishYear: 1977,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publishYear: 2003,
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publishYear: 1988,
  },
];


//const userBooks = books.filter((book) => book.genre === "Fiction");
const userBooks = books.filter((book) => {return book.publishYear >= 1800 && book.genre=="Fiction"});

console.log(userBooks);