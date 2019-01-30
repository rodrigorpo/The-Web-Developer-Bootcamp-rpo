// Arrays

var cars = ["Ford", "Fiat", "Volkswagen", "Chevrolet", "Renault"];

var motorcycles = ["YBR", "Titan", "CBR", "Ninja"];

// === Util Properties and functions ===

// indexOf
// returns the element position or -1
cars.indexOf("Ford") // 0
cars.indexOf("For") // -1

// ToString
// returns a single vector element separed by ,
cars.toString() // "Ford,Fiat,Volkswagen,Chevrolet,Renault"

// Length
// returns the size of the vector
cars.toString() // 5

// Push
// Add a new element and returns the position of the new element
cars.push() // 6

// Pop
// Remove the last element (stack) and returns the removed element
cars.pop() // Mercedes

// Shift
// Shift all elements for left size, in this case removing and returning first element
motorcycles.shift(); // "YBR"

// Splice
// Splice all elements in range of first until second parameters, in this case removing from original vector and returning the sliced elements on a new vector
motorcycles.splice(1,3); // ["YBR"]
