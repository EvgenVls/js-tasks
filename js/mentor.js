'use strict';

let arr = [];

console.log(fillArray(2, 10));

function fillArray(min, max) {
    for (let i = min; i <= max; i += 2) {
      return arr.push(i)
    }
}