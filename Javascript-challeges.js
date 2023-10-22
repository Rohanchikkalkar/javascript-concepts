// # Java Script Challenges

// Variables #1

// 1. create “firstName” and “last_name” variables
//  2. assign your values
//  3. create “address” variable and assign “main street” value to it
//  4. re-assign address to “first street” later
//  5. log all values in the console

let firstName = "Dark";
let secondName = "Knight";
let address = "main street";
console.log(address);
address = "first street";
console.log(
  `hey your name is ${firstName} ${secondName} and your address is ${address}`
);
console.log(address);

// ## Concatenate Strings #2

// 1. create “street” and “country” variables
// 2. assign your values
// 3. create “fullMailingAddress” variable and assign the result of “street + country”
// 4. remember about the space
// 5. log “fullMailingAddress” in the console

let street = "Church Street";
let country = "india";
let fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// ## Numbers #3

// 1. create “score1”, “score2”, “score3” variables and assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score
// 4. create “plates” variable and assign 20
// 5. create “people” variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display ‘There are (your value goes here) plates available’ - string concatenation
// 9. log message

let score1 = 31;
let score2 = 66;
let score3 = 100;
let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;
console.log(`${totalScore} ${averageScore}`);

let plates = 20;
let people = 7;
let remainingPlates = plates - people;
console.log(remainingPlates);
remainingPlates++;
console.log(`There are ${remainingPlates} plates available`);

// ## Arrays #4

// 1. create “fruits” array and store some fruit values
// 2. setup the last item as number (random)
// 3. assign first fruit to the variable
// 4. re-assign last array item to the actual fruit
// 5. log both first fruit variable and entire fruits array

let fruits = ["apple", "banana", "melon", "3"];
let fruit1 = fruits[0];
console.log(fruits);
fruits[3] = "kiwi";
console.log(fruits);

// ## Functions #5

// 1. create “calculateTotal” function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars “order1”,“order2”,“order3”
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor “calculateTotal” to function expression

function calculateTotal(subTotal, tax) {
  let sum = subTotal + tax;
  return sum;
}

let order1 = calculateTotal(5, 10);
let order2 = calculateTotal(20, 20);
let order3 = calculateTotal(10, 20);
console.log(order1, order2, order3);

// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array), hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

let car = {
  make: "dodge",
  model: "challenger",
  year: "2023",
  colors: ["black", "red"],
  hybrid: true,
  drive: () => {
    console.log("driving...");
  },
  stop: () => {
    console.log("stopping...");
  },
};

console.log(car.make, car.colors);
car.drive();
car.stop();

// ## Conditional Statements #7

// 1. create two objects “person1”, “person2”
// 2. setup name,age (15-25), status (‘resident’, ‘tourist’) keys
// 3. setup if else, condition where age must be bigger than 18 and status must be equal to ‘resident’
// 4. test with both objects

// ## Strings #8

// 1. create function fullName
// 2. accept two parameters “firstName”, “lastName”
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// ## Array Methods #9

// Multiple Videos

// ### Create Students Array

// 1. setup students array with 5 students { id: 1, name: ‘peter’, score: 80, favoriteSubject: ‘math’, },

// ### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// ### updatedStudents

// 1. add role:‘student’ property to each object using MAP method
// 2. assign to ‘updatedStudents’ variable and log

// ### highScores

// 1. filter array and return only scores >= 80
// 2. assign to ‘highScores’ variable and log

// ### specificId

// 1. find specific id in array
// 2. assign to ‘specificId’ variable and log

// ### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to ‘averageScore’ and log

// ### survey

// 1. list favorite subjects with reduce { english: 1 history: 1 math: 3 }
// 2. assign to survey and log
