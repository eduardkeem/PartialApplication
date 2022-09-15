'use strict';

/*
  Generalized mean (Hölder mean)
  Given n numbers a₁, a₂, ... an
  Define Hk (for k != 0) as the k-th root of the arithmetic mean
  of the k-th power of a set of numbers
         ____________________________
  Hk = ᵏ√ (a₁ᵏ + a₂ᵏ + ... + anᵏ) / n
*/

const H = (exp, ...args) => {        // Получает exp - степерь, ...args - аргументы
  const sum = args.reduce((s, a) => (s + Math.pow(a, exp)), 0);  // sum = сумма из чисел в степени начиная с 0 // 29
  const avg = sum / args.length;        // avg = sum - сумма / длину аргументов (среднее арифметическое) // 9.66
  return Math.pow(avg, (1 / exp));     // Возврат avg - среднего арифметического в степени 1 / exp (степень) // 9.66 в степени 1 / 2 = 0.5
};

const a = H(2, 2, 3, 4); // Степень 2, квадраты - 4, 9, 16, сумма = 29, 29 / 3 = 9.66
console.log('H: ' + a);   // 3.1    

// Use method bind() to create new functions from function H.
// Create function `average` that returns arithmetic mean (H₁) of the arguments.
// Create function `rootMeanSquare` that returns quadratic mean (H₂).

const average = null;

const rootMeanSquare = null;

module.exports = { average, rootMeanSquare };
