// ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// </br>
// Print the result in 2 decimal places.

// ---

// **Sample Input:**
// </br>
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// </br>
// 71.04


const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;
const totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
const avgMarks = totalMarks / 5;
const avgMarks2Decimal = avgMarks.toFixed(2)
console.log( avgMarks2Decimal)