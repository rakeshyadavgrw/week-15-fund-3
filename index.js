// ***********Question-1************
// const car ={
//     make:"TATA",
//     model:"safari",
//     year:2023
// };

// function displayCarProperties(car){
//     for(const property in car){
//         console.log(`${property}: ${car[property]}`);
//     }
// }

// displayCarProperties(car);

// ***********Question-2************
// const student={
//     name:"hitesh",
//     age:18,
//     grade:"B"
// };

// function updateGrade(newGrade){
//     student.grade = newGrade;
// }
// updateGrade("A")
// console.log(student);

// ***********Question-3************
// function countProperties(obj) {
//     return Object.keys(obj).length;
//   }
  
//   const exampleObject = { a: 1, b: 2, c: 3 };
//   console.log(countProperties(exampleObject));
  
// ***********Question-4************
// function hasProperty(obj, propertyName) {
//     return obj.hasOwnProperty(propertyName);
//   }
  
//   const exampleObject = { name: "Alice", age: 25 };
//   console.log(hasProperty(exampleObject, "age")); 
//   console.log(hasProperty(exampleObject, "email")); 
  
// ***********Question-5************
// const radius = 5;
// const area = Math.PI*Math.pow(radius,2);
// console.log(area);

// ***********Question-6************
// function reverseString(input) {
    //     return input.split('').reverse().join('');
    //   }
    
    //   const originalString = "Hello, world!";
    //   const reversedString = reverseString(originalString);
    //   console.log(reversedString);
    
    // ***********Question-7************
const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Alice", 30, "alice@example.com");
addUser("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("Alice", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);

