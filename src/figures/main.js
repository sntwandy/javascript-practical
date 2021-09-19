/**
 *
 * @param { Text message } message
 * @param { Number value } value
 * @param { Value type text } valueType
 */

const print = (message, value, valueType = "") => {
	console.log(`${message}: ${value}${valueType}`);
};

/**
 * Square code
 */

console.group("Square");

const squareSide = 5;

const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

print("Square side", squareSide, "cm");
print("Square perimeter", squarePerimeter, "cm");
print("Square area", squareArea, "cm'2");

console.groupEnd();

/**
 * Triangle code
 */

console.group("Triangle");

const triangleSideOne = 6;
const triangleSideTwo = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;

const trianglePerimeter = triangleSideOne + triangleSideTwo + baseTriangle;
const areaTriangle = (baseTriangle * heightTriangle) / 2;

print("The triangle side one is", triangleSideOne, "cm");
print("The triangle side two is", triangleSideTwo, "cm");
print("The base of the triangle is", baseTriangle, "cm");

print("The height of the triangle is", heightTriangle, "cm");
print("The perimeter of the triangle is", trianglePerimeter, "cm");
print("The area of the triangle is", areaTriangle, "cm'2");

console.groupEnd();

/**
 * Circle code
 */

console.group("Circle");

const PI = Math.PI;
const radioCircle = 4;
const diameterCircle = radioCircle * 2;
const perimeterCircle = Math.round(PI * diameterCircle);
const areaCircle = Math.round(PI * (radioCircle * radioCircle));

print("The value of PI", PI);
print("The radio of the circle is", radioCircle, "cm");
print("The diameter of the circle is", diameterCircle, "cm");
print("The perimeter of the circle is", perimeterCircle, "cm");
print("The area of the circle is", areaCircle, "cm'2");

console.groupEnd();
