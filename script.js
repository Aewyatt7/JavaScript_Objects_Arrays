console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const myVar = new Array(6);
const allNumbers = [2, 22, 12, 17, 18, 39, 129];
let x = arraySum(allNumbers);
console.log(x);

function arraySum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    //Iterating over the numbers array
    sum += number[i];
  }
  return sum;
}

const mySecondNumbers = [7, 2, 3, 1];

console.log(arraySum(mySecondNumbers));

// Exercise 2: Favorite Book
console.log("EXERCISE 2:\n==========\n");


//Talk to Tyson about this. 
const getInfo = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
}

// Book object '{}' means Object
const book = {};
book.title = "Atomic Habbits";
book.author = "James Clear";
book.pages = 305;
book.readCount = 1;

//I need to make a method using a dot note
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

//This is how we test it
console.log(book.info());

const mySecondBook = {
  title: "The Hobbit",
  author: "Tolkien",
  numberOfPages: 200,
  readCount: 32,
  info: getInfo
};
console.log(mySecondBook.info());

//Exercise 3: Reverse a String
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

let reversedSentence = "";
//Step 2. Split reutrns a array of words we use the (" ") to make
// each word an array
const arrayOfWords = sentence.split(" ");
//Step 3.
for (let i = 0; i < arrayOfWords.length; i++) {
  //step 4 need to make each word an array of characters
  const arrayOfCharacters = arrayOfWords[i].split("");
  //Step 5
  arrayOfCharacters.reverse();
  //Step 7
  const reversedWord = arrayOfCharacters.join("");
  reversedSentence += reversedWord + " ";
}
console.log(reversedSentence);

//Exercise 4: Parse a CSV
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
//What we need it to look like
/* 
Name    Age
Frodo   50
Sam     38
Merry   36
*/

//Step 8
const resultArray = [];

//Step 2
// Parse the string into an array of rows (split based on\n newlines) "\n" makes a split
const rows = csvData.split("\n");

//Step 3 Split the first row into an array of string headers
//(result should be["name", "age"])
const firstRow = rows[0].split(",");

//Step 4 Iterate over each remaining row in the array
for (let i = 1; i < rows.length; i++) {
  //Step 5 For each row, split the data values (by ,)
  const rowData = rows[i].split(",");

  //Step 6 Create an object for each row (or table record)
  const obj = {};

  //Step 7 Assign the values from the parsed row values to name
  //and age values on the object
  obj.name = rowData[0]; //this is to take the first onfo
  obj.age = rowData[1]; //this is to take the second info

  //Step 8 Add each new object to a result array (should be defined before the loop block needs to be done before the for loop
  //".push" is made to add something to the end of the array
  resultArray.push(obj);
}

console.log(resultArray);
