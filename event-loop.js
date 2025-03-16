/**
 * Event loop implementation
 */

setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
  console.log(3)
  res();
}).then(() => console.log(4));

console.log(5);

/**
 * output>>
 * 2
 * 3
 * 5
 * 4
 * 1 
*/