"use strict";
import { print, printDiv } from "./helpers.js"

~function findPythagoreanTriplet(tripletSum) {
    let abc = [...(Array(tripletSum || 1000).keys())]
    abc.forEach(c => {
        for (let a = 1; a <= abc.length; a++) {
            for (let b = 1; b <= abc.length; b++) {
                if (!(a + b + c === abc.length)) continue;
                if ((a * a) + (b * b) === c * c) {
                    print(`${a}^2 + ${b}^2 === ${c}^2 || the abc(answer) is ${a * b * c}`)
                    break;
                }
            }
        }
    })
}();



