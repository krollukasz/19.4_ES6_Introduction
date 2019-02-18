const sayHello = () => alert("Hello world !");
sayHello();

// EXERCISE 1

const one = "Hello";
const two = "World";

const three = `${one} ${two}`;
console.log(three);

// EXERCISE 2

const multiply = (x = 2, y = 3) => (x * y);
console.log(multiply(3));

// EXERCISE 3

const average = (...args) => {
  let sum = 0;
  args.forEach(arg => {
    sum += arg;
  })
  return sum / args.length;
}
console.log(`Average is ${average(1,2,3,4,5,6)}`);

// EXERCISE 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const functionAverage = (...rets) => {
  let sum = 0;
  grades.forEach(args => {
    sum += args;
  })
  return sum / grades.length;
}
console.log(`Average value is ${functionAverage(grades)}`);

// EXERCISE 5

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;

console.log(`${firstName} ${lastName}`);