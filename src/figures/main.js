/**
 * @param {number} squareSide
 * @returns {number}
 * @description Calculate the perimeter of a square
 * @example
 * perimeterSquare(3); // => 12
 */
const squarePerimeter = (squareSide) => squareSide * 4;

/**
 * @param {number} squareSide
 * @returns {number}
 * @description Calculate the area of a square
 * @example
 * areaSquare(3); // => 9
 */
const squareArea = (squareSide) => squareSide * squareSide;

/**
 * @param {number} base
 * @param {number} height
 * @returns {number}
 * @description Calculate the area of a triangle
 * @example
 * areaTriangle(3, 4); // => 6
 */
const areaTriangle = (base, height) => (base * height) / 2;

/**
 * @param {number} sideOne
 * @param {number} sideTwo
 * @param {number} base
 * @returns {number}
 * @description Calculate the perimeter of a triangle
 * @example
 * perimeterTriangle(3, 4, 5); // => 12
 */
const trianglePerimeter = (sideOne, sideTwo, base) => sideOne + sideTwo + base;

const PI = Math.PI;

/**
 * @param {number} radio
 * @returns {number}
 * @description Calculate the diameter of a circle
 * @example
 * diameterCircle(3); // => 6
 */
const diameterCircle = (radio) => radioCircle * 2;

/**
 * @param {number} radio
 * @returns {number}
 * @description Calculate the circumference of a circle
 * @example
 * circumferenceCircle(3); // => 18.84
 */
const circumferenceCircle = (radio) => PI * diameterCircle(radio);

/**
 * @param {number} radio
 * @returns {number}
 * @description Calculate the area of a circle
 * @example
 * areaCircle(3); // => 28.27
 */
const areaCircle = (radio) => PI * (radioCircle * radioCircle);
