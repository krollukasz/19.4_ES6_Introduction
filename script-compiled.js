'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var sayHello = function sayHello() {
  return alert("Hello world !");
};
sayHello();

// EXERCISE 1

var hello = Hello;
var world = World;
var greeting = function hello() {
  console.log(Hello + ' ' + World);
};

// EXERCISE 2

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return x * y;
};
console.log(multiply(3));

// EXERCISE 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum / args.length;
};
console.log('Average is ' + average(1, 2, 3, 4, 5, 6));

// EXERCISE 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var averageValue = function averageValue() {
  for (var _len2 = arguments.length, grades = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    grades[_key2] = arguments[_key2];
  }

  var sum = 0;
  grades.forEach(function (args) {
    sum += args;
  });
  return sum / args.length;
};
console.log('Average value is ' + average[grades]);

// EXERCISE 5

var array = [1, 4, 'Iwona', false, 'Nowak'];

var _name = name,
    _name2 = _slicedToArray(_name, 5),
    firstName = _name2[2],
    lastName = _name2[4];

console.log(firstName + ' ' + lastName);
