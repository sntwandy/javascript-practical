/**
 * Square code
 */

console.group("Square");

const squareSide = 5;
console.log("The square side is: " + squareSide + "cm");

const squarePerimeter = squareSide * 4;
console.log("The perimeter of the square is: " + squarePerimeter + "cm");

const squareArea = squareSide * squareSide;
console.log("The square area is: " + squareArea + "cm'2");

console.groupEnd();

/**
 * Triangle code
 */

console.group("Triangle");

const triangleSideOne = 6;
const triangleSideTwo = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;

console.log(
	`The triangle sides are: ${triangleSideOne}cm, ${triangleSideTwo}cm and ${baseTriangle}cm`
);
console.log(`The triangle height: ${heightTriangle}cm`);

const trianglePerimeter = triangleSideOne + triangleSideTwo + baseTriangle;
console.log(`The perimeter of the triangle is: ${trianglePerimeter}cm`);

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log(`The area of the triangle is: ${areaTriangle}cm'2`);

console.groupEnd();
