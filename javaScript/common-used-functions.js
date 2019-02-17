// === FUNCTIONS ===

var cars = ["Ford", "Fiat", "Volkswagen", "Chevrolet", "Renault"];

// ForEach
// Applies a function to each element

cars.forEach(function(element){
    console.log(element.length); // 4 10 9 7 
});

// Filter
// Filters the vector based on a condition

cars.filter(function(element){
    return element.charAt(0) == 'F'; // ["Ford", "Fiat"]
});

// Filter
// Filters the vector based on a condition

cars.filter(function(element){
    return element.charAt(0) == 'F'; // ["Ford", "Fiat"]
});

// Every
// Returns true if all elements satisfy the condition

cars.every(function(element){
    return element.charAt(0) == 'F'; // false
});

// Some
// Returns true if, at least one element, satisfies the condition

cars.some(function(element){
    return element.charAt(0) == 'F'; // true
});

// Map
// Returns a new mapped vector

cars.map(function(element){
    return {
        element,
        size: element.length
    }
});

// Reduce
// Reduce the function on a single element --> the value passed after the function is the initial value

cars.reduce(function(previous, current){
    return previous + current.length;
}, 0);

cars.reduce(function(previous, current){
    return previous + ` ` + current;
}, 'Begins:');