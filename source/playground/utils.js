console.log('utils.js is running!!');

const square = (x) => x * x;

const add = (a,b) => a + b;

export const minus = (a,b) => a - b; // named export by itself

const subtract = (a,b) => a - b; 

export default subtract;
export { square, add }; //named export
// export { square, add, subtract as default }; //named export + default

