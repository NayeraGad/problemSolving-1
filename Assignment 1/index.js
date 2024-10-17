/* 
// 1. Create a function that calculates the sum of two given numbers.
const sumOfTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;

  return sum;
};

console.log(sumOfTwoNumbers(3, 5)); 
*/

/* 
// 2. Write a function that checks if a number is prime (a number that can only 
// be divided by 1 and itself without any remainder).
const isPrim = (num) => {
    if (num <= 1) return false

    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }

    return true
} 

console.log(isPrim(7)); 
*/

/* 
// 3. Write a function to reverse a given string (using built in method).
const reverse = (word) => {
    const reversedWord = word.split('').reverse().join('')

    return reversedWord;
}

console.log(reverse('hello'));  
*/

/* 
// 4. Write a function to find the largest number in an array.
const findMaxNum = (array) => {
    const maxNumber = array.reduce((max, number) => {
        return number > max ? number :  max
    })

    return maxNumber
}

console.log(findMaxNum([1, 3, 7, 2, 4]));
 */

/* 
// 5. Write a function that filters an array and returns only the even numbers.
const isEven = (array) => {
    const even = array.filter((num) =>  num % 2 === 0)

    return even
}

console.log(isEven([1, 2, 3, 4, 5, 6])); 
*/

/* 
//  6. Implement a function to reverse a string without using the built-in 
//  reverse() method.
const reverse = (word) => {
    let reversedWord = ''

    for (let i = (word.length - 1); i >= 0; i--) {
        reversedWord += word[i]
    }

    return reversedWord
}

console.log(reverse("route"));
 */

/* 
// 7. Write a function to calculate the average value of all numbers in an array.
const calculateAverage = (array) => {
  const total = array.reduce((prev, next) => prev + next, 0);
  const average = total / array.length;

  return average;
};

console.log(calculateAverage([1, 2, 3, 4, 5]));
 */

/* 
// Write a function that determines whether a given day number (1-7) represents a
// weekday or weekend.
const isWeekend = (day) => {
    if (day > 7) return 'Invalid day number'

    return (
        day === 6 || day === 7 ? "Weekend" : 'Weekday'
    )
}

console.log(isWeekend(5));
console.log(isWeekend(7));
 */

/* 
// 9. Write a function that filters an array of numbers and returns 
// only those that are divisible by 2 or 3.
const isDevisable = (array) => {
    return array.filter((num) => num % 2 === 0 || num % 3 === 0)
}

console.log(isDevisable([1, 2, 3, 4, 5, 6, 7, 8, 9]));
 */

/* 
// 10. Write a function that finds the index of a given element in an array.
// If the element isn't found, return `-1`.
const isFound = (array, element) => {
    return array.indexOf(element);
}

console.log(isFound([1, 2, 3, 4, 5], 3));
console.log(isFound([1, 2, 3, 4, 5], 10));
 */