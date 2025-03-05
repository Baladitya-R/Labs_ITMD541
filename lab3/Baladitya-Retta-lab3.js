// Baladitya Retta
// ITMD 541-01 Graduate Student

// Exercise #1
console.log("Exercise 1: Min, Max, Average");
console.log("====================");
function minMaxAverage(numbers) {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    const average = (numbers.reduce((sum, num) => sum + num, 0) / totalNumbers).toFixed(2);
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average}`);
}

// Test cases for Exercise 1
minMaxAverage([12, 8, 15, 6, 3]);
minMaxAverage([100, 200, 300, 400]);
minMaxAverage([7, 14, 21, 28, 35]);

// Exercise #2
console.log("====================");
console.log("Exercise 2: Vowel Count");
console.log("====================");
function countVowels(word) {
    const vowels = word.match(/[aeiou]/gi);
    const vowelCount = vowels ? vowels.length : 0;
    console.log(`${word}: ${vowelCount} vowels`);
}

// Test cases for Exercise 2
countVowels("Elephant");
countVowels("Umbrella");
countVowels("Education");

// Exercise #3
console.log("====================");
console.log("Exercise 3: Sorting Numbers");
console.log("====================");
function sortNumbers(numbers) {
    const sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}] Sorted Array: [${sortedArray}]`);
}

// Test cases for Exercise 3
sortNumbers([17, 5, 22, 8, 13]);
sortNumbers([50, 30, 10, 40, 20]);
sortNumbers([99, 88, 77, 66, 55]);

// Exercise #4
console.log("====================");
console.log("Exercise 4: Celsius to Fahrenheit");
console.log("====================");
function celsiusToFahrenheit(celsius) {
    // Handle string input
    const celsiusNumber = typeof celsius === 'string' ? parseFloat(celsius) : celsius;
    const fahrenheit = ((celsiusNumber * 9/5) + 32).toFixed(1);
    console.log(`${celsiusNumber.toFixed(1)} Celsius = ${fahrenheit} Fahrenheit`);
}

// Test cases for Exercise 4
celsiusToFahrenheit(25);
celsiusToFahrenheit(-10);
celsiusToFahrenheit(75);
celsiusToFahrenheit("15");
celsiusToFahrenheit("22.5");

// Exercise #5
console.log("====================");
console.log("Exercise 5: Sorting People by Age");
console.log("====================");
function introducePeople(people) {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    const introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test cases for Exercise 5
const people1 = [
    { name: 'Sai', age: 32, city: 'San Diego' },
    { name: 'Aditya', age: 24, city: 'Austin' },
    { name: 'Kishore', age: 40, city: 'Phoenix' },
    { name: 'Vruthika', age: 29, city: 'Portland' },
    { name: 'Teju', age: 35, city: 'Atlanta' }
];

const people2 = [
    { name: 'Andriea', age: 27, city: 'Orlando' },
    { name: 'Mahesh', age: 31, city: 'Nashville' },
    { name: 'Pawan', age: 22, city: 'Las Vegas' },
    { name: 'Akira', age: 38, city: 'Detroit' },
    { name: 'Sejal', age: 26, city: 'Raleigh' }
];

introducePeople(people1);
introducePeople(people2);
