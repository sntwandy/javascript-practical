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

/**
 * Circle code
 */

console.group("Circle");

const PI = Math.PI;
console.log(`PI is: ${PI}`);

const radioCircle = 4;
console.log(`The circle radio is: ${radioCircle}cm`);

const diameterCircle = radioCircle * 2;
console.log(`The diameter of the circle is: ${diameterCircle}cm`);

const perimeterCircle = Math.round(PI * diameterCircle);
console.log(`The perimeter of the circle is: ${perimeterCircle}cm`);

const areaCircle = Math.round(PI * (radioCircle * radioCircle));
console.log(`The area of the circle is: ${areaCircle}cm'2`);

console.groupEnd();
