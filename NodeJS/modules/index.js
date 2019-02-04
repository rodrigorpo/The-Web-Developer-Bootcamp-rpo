// Node finds the file and exported variables or functions
// Only module exports returns something. This and exports is only the reference.
const createSerialGenerator = require('./serialGenerator.js');
// Local exports
const serialGenerator = createSerialGenerator();

// If the module doesn't begins with '/', '../' or './' -- node finds on the default path: node_modules

// console.log(serialGenerator.generate());
// console.log(serialGenerator.generateOnlyExports());
// console.log(serialGenerator.generateWithThis());

// console.log(serialGenerator.generate());
// console.log(serialGenerator.generateFun());
