const MAX = 1000;

// Module.exports
module.exports.generate = function () {
    return Math.floor(Math.random() * MAX);
};

// Exports
exports.generateOnlyExports = function () {
    return Math.floor(Math.random() * MAX);
};

// This
this.generateWithThis = function () {
    return Math.floor(Math.random() * MAX);
};

var generate = function () {
    return Math.floor(Math.random() * MAX);
};

// module.exports, exports and this refers to the same reference.
// The require function only returns if you exports with module.exports
// Only module exports returns something. This and exports is only the reference.

// ==== Others forms to exports ====
module.exports = {
    generate: generate
};

// Generator function

var createSerialGenerator = function () {
    var max = 10000;

    var generateFun = function () {
        return Math.floor(Math.random() * max);
    }

    return {
        generateFun: generateFun
    };
};


// Exports the function directly returning a fabric object
module.exports = createSerialGenerator();


// ==== Returning full function ====

var createSerialGenerator = function() {
    var max = 10000;

    var generateFun = function () {
        return Math.floor(Math.random() * max);
    }

    return {
        generateFunClass: generateFunClass
    };
}
// Returning full function
module.exports = createSerialGenerator;