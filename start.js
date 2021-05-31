// 1. Create an array that contains three strings.
const arrayWithThreeStrings = ["Yellow", "Blue", "Red"];
// 2. Create an array that contains one string, one number and one boolean.
const arrayWithStringNumberBoolean = ["Tom", 21, true];
// 3. Create an array hat contains three empty arrays.
const arrayWithTreeEmpty = [[], [], []];
// 4. Create an empty object.
const empyObject = {};
// 5. Create an object with three properties: id, email, password.
const user = {
  id: 556,
  email: "sample@sampl.org",
  password: 156456,
};
// 6. Create an array that contains three objects. All objects should have a width and a height property.
const arrayWithTreeObjects = [
  { width: 30, height: 50 },
  { width: 35, height: 55 },
  { width: 40, height: 60 },
];
// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.
const job = {
    name: "Rond",
    score: [45,65,59],
    jobChar: {
        history: "old",
        age: 45
    }

}
// 8. Print the `type` of a variable that has an array value.
console.log("Task:8 ")
const printArrayType = Array.isArray(arrayWithThreeStrings);
console.log(printArrayType);

// 9. Print the `type` of a variable that has an object value.
console.log("Task: 9")
console.log(typeof job);
// 10. Create an array with five random values.
console.log("Task: 10")
const numbers = [1,2,3,4,5];
console.log(numbers)
// 10.1. Add one value to the end of the array.
console.log("Task: 10.1")
numbers.push(6);
console.log(numbers)
// 10.2. Add one thing to the beginning of the array.
console.log("Task:10.2")
numbers.unshift(0);
console.log(numbers);
// 10.3. Take out one thing from the end of the array.
console.log("Task: 10.3");
numbers.pop();
console.log(numbers)
// 10.4. Print the length of the array.
console.log("Task: 10.4 ");
console.log(`The length of array numbers is ${numbers.length}`);
// 10.5. Take out one thing from the end of the array.
console.log("Task: 10.5 ");
numbers.splice(numbers.length-1,1)
console.log(numbers)
// 10.6. Take out one the 2nd thing from the array.
console.log("Task: 10.6");
numbers.splice(1,1)
console.log(numbers)
