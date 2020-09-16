"use strict";
/* let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// console,log(something);
let ut;
console.log(ut);

const obj = {
    name: "John",
    age: 23,
    isMarried: true
};

console.log(obj["name"]);

const result = confirm('Are you here?');

console.log(result); */

// const answer = prompt("Есть 18 лет?", "18");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// const name = 'Ivan';
// alert (`Привет, ${name}!`);

// function template(strings, ...keys) {
//     return (function(...values) {
//       var dict = values[values.length - 1] || {};
//       var result = [strings[0]];
//       keys.forEach(function(key, i) {
//         var value = Number.isInteger(key) ? values[key] : dict[key];
//         result.push(value, strings[i + 1]);
//       });
//       return result.join('');
//     });
//   }
  
//   var t1Closure = template`${0}${1}${0}!`;
//   t1Closure('Y', 'A');  // "YAY!"
//   var t2Closure = template`${0} ${'foo'}!`;
//   t2Closure('Hello', {foo: 'World'});  // "Hello World!"

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}