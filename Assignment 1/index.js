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
const reverse = (string) => {
    const reversedString = string.split('').reverse().join('')

    return reversedString;
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
const reverse = (string) => {
    let reversedString = ''

    for (let i = (string.length - 1); i >= 0; i--) {
        reversedString += string[i]
    }

    return reversedString
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

/* 
// 11. Write a function to calculate the factorial of a given number.
const getFactorial = (num) => {
    let factorial = 1

    if (num < 0) return "Factorial is not defined";
    
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }

    return factorial
}

console.log(getFactorial(5));
 */

/* 
// 12. Write a function that takes an object and returns an array
// containing only its keys.
const getKeys = (object) => {
  return Object.keys(object);
};

console.log(getKeys({ name: "John", age: 30 }));
 */

/* 
// 13. Write a function that returns only the unique numbers from an array.
const getUnique = (array) => {
  uniqueArray = array.filter((num) => {
    return array.indexOf(num) === array.lastIndexOf(num);
  });

  return uniqueArray;
};

console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));
 */

/* 
//  14. Write a function to count the occurrences of each character in a string.
const countOccurrences = (string) => {
  let count = {};

  string.toLowerCase().split("").forEach((char) => {
    !count[char] && (count[char] = 0);
    count[char]++;
  });

  return count;
};

console.log(countOccurrences("hello"));
 */

/* 
// 15. Write a function that sorts an array of numbers in ascending order.
const orderArray = (array) => {
    return array.sort()
}

console.log(orderArray([5, 3, 8, 1, 2]));

 */

/* 
// 16. Write a function to check if a given string is an anagram of another string
//  (i.e., contains the same characters in a different order).
const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  return word1.split("").sort().join("") === word2.split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagram("listen", "silent"));
 */

/* 
// 17. Write a function that removes all falsy values
// (`false`, `null`, `0`, `""`, `undefined`, and `NaN`) from an array.
const removeFalsy = (array) => {
  return array.filter((word) => word);
};

console.log(removeFalsy([0, false, "Hello", "", null, undefined, NaN, 42]));
 */

/* 
// ?18. Write a function that creates a car object with properties such as
// ?`model` and `year’ and includes a method to display the car's details.
const displayDetails = (modal, year) => {
  const car = {
    model: modal,
    year: year,
  };

  return car;
};

console.log(displayDetails("Toyota", 2020));
 */

/* 
// 19. Write a function that checks if a given object contains a specific property.
const containProperty = (object, property) => {
    // return object.property !== undefined ? true : false;
    return Object.hasOwn(object, property)
}

console.log(containProperty({ name: "Alice", age: 25 }, "name"));
console.log(containProperty({ name: "Alice", age: 25 }, "address"));

 */

/* 
// 20. Write a function to count the number of vowels (a, e, i, o, u) in a string,
// regardless of case.
const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];

  const array = string.toLowerCase().split("");

  const arrayOfVowels = array.filter((char) => vowels.includes(char));

  return arrayOfVowels.length;
};

console.log(countVowels("Hello World"));
 */

/* 
// 21. Write a function that splits a string into an array of words based on spaces. 
const splitWords = (string) => {
    return string.split(' ')
}

console.log(splitWords("The quick brown fox"));
 */

/* 
// 22. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`)
// on two numbers.
const calculate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }

  return result;
};

console.log(calculate(5, 3, "+"));
console.log(calculate(5, 3, "%"));
 */
