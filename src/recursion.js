/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

/*
factorial(5)

iteration      n         return        
0              5          5 * factorial(5-1)
1              4          5 * 4 * factorial(4-1)
2              3          5 * 4 * 3 * factorial(3-1)  
3              2          5 * 4 * 3 * 2 * factorial(2-1)
4              1          5 * 4 * 3 * 2 * 1 * factorial(1-1)
5              0          5 * 4 * 3 * 2 * 1 * 1 => 120
*/

var factorial = function(n) {
	if (n < 0) {
		return null;
	}
	if (n === 0) { //base case
		return 1;
	} else { //recursive case
	 	return n * factorial(n-1);
	}
};


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*
input: array
output: num (sum)
process: recursive function adds to the previous element

base case: recursion ends at the last element of the array
recursive: every element of the array and add it to the previous

Transformation Steps:
iteration     	      array       						return 
0             	[1, 2, 3, 4, 5, 6]            1 + sum([2, 3, 4, 5, 6])
1             	[2, 3, 4, 5, 6]               1 + 2 + sum([3, 4, 5, 6])             	
2             	[3, 4, 5, 6]                  1 + 2 + 3 + sum([4, 5, 6])             
3             	[4, 5, 6]                     1 + 2 + 3 + 4 + sum([5, 6])             		
4             	[5, 6]                        1 + 2 + 3 + 4 + 5 + sum([6])             		 
5             	[6]                           1 + 2 + 3 + 4 + 5 + 6 + sum([])
6             	[]                            1 + 2 + 3 + 4 + 5 + 6 + 0 => 21             		
*/

var sum = function(array) {
  if (array.length === 0) {
  	return 0;
  } else {
  return array[0] + sum(array.slice(1));	
  }
};


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
/*
input: nested array
output: the sum of the values
process: flatten the array, then proceed with recursion similar to above.
*/

var arraySum = function(array) {
  var flattenedArr = array.flat(Infinity);
  if (flattenedArr.length === 0) {
  	return 0;
  } else {
  return flattenedArr[0] + arraySum(flattenedArr.slice(1));	
  }
};

// 4. Check if a number is even.
// isEven(8); => true   isEven(1); => false
/*
Input: number
Output: boolean
Process: Base case 

Transformation Steps:

n=9
expected result = false
9 % 2 === 1

iteration      number     n-2
0               9          7
1               7          5
2               5          3
3               3          1

n=-6
expected result = true
iteration      number      negative? if yes -1 * n     
                               if no, n-2   
0               -6            yes, -6 -> 6           
1               6             no, 6-2 -> 4  
2               4             no, 4-2 -> 2                                      
3               2             no, 2-2 -> 0                                      

*/
var isEven = function(n) {
	if (n === 0) {
		return true;
	} else if (n === 1){
		return false;
	} else if (n < 0) {
		return isEven(-1 * n);  //or isEven(n+2);	
	} else {
		return isEven(n-2); 
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
// sumBelow(7); // 21

/*
Input: number
Output: sum of all numbers before
Process: Iterate through all the numbers under and get the sum

Transformation Steps:
sumBelow(10)
iteration   		n			return
	0		 	 	10       9 + sumBelow(9)
	1		 		9        9 + 8 + sumBelow(8)
	2			 	8        9 + 8 + 7 + sumBelow(7)
	3				7        9 + 8 + 7 + 6 + sumBelow(6)
	4				6        9 + 8 + 7 + 6 + 5 + sumBelow(5)
	5			 	5        9 + 8 + 7 + 6 + 5 + 4 + sumBelow(4)
	6				4        9 + 8 + 7 + 6 + 5 + 4 + 3 + sumBelow(3)
	7				3        9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + sumBelow(2)
	8				2        9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + sumBelow(1)
	9				1        9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 + sumBelow(0)
	10		  		0        9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 + 0 = 45
*/
var sumBelow = function(n) {
	if (n === 0) {
		return 0;
	} else if (n > 0) {
		return (n - 1) + sumBelow(n - 1);
	} else if (n < 0) {
		return (n + 1) + sumBelow(n + 1);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/*
Input: 2 numbers
Output: array of numbers between x and y

Transformation Steps:
range(2, 9)
iteration		x		y		return
0				2		9		range(2, 9-1).concat(9-1)	
1				2		8		range(2, 8-1).concat(8-1).concat(9-1)
2				2		7		range(2, 7-1).concat(7-1).concat(8-1).concat(9-1)
3				2		6		range(2, 6-1).concat(6-1).concat(7-1).concat(8-1).concat(9-1)
4				2		5		range(2, 5-1).concat(5-1).concat(6-1).concat(7-1).concat(8-1).concat(9-1)
5				2		4		range(2, 4-1).concat(4-1).concat(5-1).concat(6-1).concat(7-1).concat(8-1).concat(9-1)
6				2		3		[].concat(4-1).concat(5-1).concat(6-1).concat(7-1).concat(8-1).concat(9-1) => [3, 4, 5, 6, 7, 8]


*/
var range = function(x, y) {
	if (x === y || x === y - 1 || x === y + 1) {
  	return [];
	} else if (x > y) {
		return range(x, y+1).concat(y+1); 
	} else {
		return range(x, y-1).concat(y-1);
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*

*/
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	} else if(exp < 0) {
		return 1 / exponent(base, -exp)
	} else {
		return base * exponent(base, exp - 1)
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
input: a number
output: boolean

strategy: A power of 2 is a number that is equivalent to 2^x. 
*/
var powerOfTwo = function(n) {
	if (n < 1) {
		return false;
	} else if (n === 1) {
		return true;
	} else {
		return powerOfTwo(n / 2);
	}
};

// 9. Write a function that reverses a string.
/*
input: string
output: reversed string
strategy: plucking from the string, substr() deletes from the front, charAt() will pluck
		charAt(x): returns a new string of the string value at the given index
		substr(x, y): returns the part of the string between the starting index and the number of characters behind it. If the second parameter is undefined, it will return all characters behind the starting index. 

// reverse(water) = ? => '' + 'r' +'e' + 't' + 'a' + 'w'
// reverse(water) = reverse(ater) + 'w' => '' + 'r' +'e' + 't' + 'a' + 'w'
// reverse(ater) = reverse(ter) + 'a' => '' + 'r' +'e' + 't' + 'a'
// reverse(ter) = reverse(er) + 't' => '' + 'r' +'e' + 't'
// reverse(er) = reverse(r) + 'e' => '' + 'r' +'e'
// reverse(r) = reverse() + 'r' => '' + 'r'
// reverse() [string.length=0] = ''

*/
var reverse = function(string) {
	if (string.length === 0){
		return '';
	} else {
		return reverse(string.slice(1)) + string.charAt(0);
	}
};

// 10. Write a function that determines if a string is a palindrome.
/*
input: string
output: boolean
*/
// 'hi he llo'.split(' '') => ['hi', 'he', 'llo'].join('') => 'hihello'
var palindrome = function(string) {
  var str = string.split(' ').join('').toLowerCase()

	if (str.length === 0 || str.length === 1){
		return true;
	} else if (str[0] === str[str.length-1]) {
		return palindrome(str.slice(1, str.length-1));
	} 
		return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
Transformation
modulo(17, 5)
iteration		x		y 		new (x, y)								remainder
0				17		5		modulo(17-5, 5) -> modulo(12,5) 
1				12		5		modulo(12-5, 5) -> modulo(7,5)
2				7		5		modulo(7-5, 5) -> modulo(2,5)
3				2		5		x is less than y, so remainder is x			(2)

modulo(-16, 3)
iteration		x		y 		new (x, y)								remainder
0				-16		3		-modulo(--16, 3) -> -modulo(16, 3)
1				16		3		-modulo(16-3, 3) -> -modulo(13, 3)
2				13		3		-modulo(13-3, 3) -> -modulo(10, 3)...
3				10		3
4				7		3	
5				4		3		-modulo(4-3, 3) -> -modulo(1, 3)
6				1		3		x is less than y, so remainder is x			-(1)
*/
var modulo = function(x, y) {
	if (x === 0 && y === 0) {
		return NaN;
	} else if (x < 0) {
		return -modulo(-x, y); 
	} else if (y < 0) {
		return modulo(x, -y);
	} else if (x < y) {
		return x;
	} else {
		return modulo(x - y, y);
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
