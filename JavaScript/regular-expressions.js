// Regular Expressions

/*
    It can be used directly by using -->  / some content /
    or using API: RegExp.
    var regExp = new RegExp("abc") == regExp = /abc/

    Exec details more. 
    Test brings only result
*/

// First Example
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone)); // true

// Second Example
// Some caracters is specials, like '(' --> to scape use \ before the caracter
var regExp = /(48) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // false
var regExp = /\(48\) 9999\-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // true

// Third Example
// To recognize a expression unique use:
// ^ --> initialize with
// $ --> ends with
var regExp = /\(48\) 9999\-9999/;
var telefone = "(48) 9999-9999 aa";
console.log(regExp.test(telefone)); // true
var regExp = /^\(48\) 9999\-9999$/;
var telefone = "(48) 9999-9999 aa";
console.log(regExp.test(telefone)); // false

// Fourth Example
// Caracters group
// [abc] --> accepts all caracters
// [^abc] --> rejects all caracters
// [0-9] --> accepts all numbers
// [^0-9] --> rejects all numbers
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]$/;
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // true but verbose

// Fifth Example
// Quantifiers - Using a exact number
// - Can be applied to a group, conjuncts or metacaracters
// {n} - Quantifies a specific number
// {n,} - Quantifies a minimal number
// {n,m} - Quantifies a maximal number and minimal one
var regExp = /^\([0-9]{2}\) [0-9]{4}\-[0-9]{4}$/; // true, much better
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone));
console.log(regExp.test("(48) 9999-9999"));

// Sixty Example
// Quantifiers - Using a range
// {n,m} - Quantifies a minimal number
var regExp = /^\([0-9]{2}\) [0-9]{4,5}\-[0-9]{4}$/;
var telefone = "(48) 9999-9999";
console.log(regExp.test("(48) 99999-9999")); // true
console.log(regExp.test("(48) 9999-9999")); // true

// Seventh Example
// Quantifiers - use this after the caracter you want to be optional
// ? - Zero or one
// + - One or more
// * - Zero or more
var regExp = /^\([0-9]{2}\) [0-9]{4,5}\-?[0-9]{4}$/;
var telefone = "(48) 9999-9999";
console.log(regExp.test("(48) 99999-9999")); // true
console.log(regExp.test("(48) 9999-9999")); // true

// Eighth Example
// Recognize a lot of conjuncts on a messed structure
// + - One or more
var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}\-?[0-9]{4}<\/td><\/tr><\/table>/;
var table = "<table><tr><td>(80) 9977-7599</td></tr></table>";
var regExp2 = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}\-?[0-9]{4}<\/td>)+<\/tr><\/table>/; // td repeat one or more
var table2 = "<table><tr><td>(80) 9977-7599</td><td>(99) 99966699</td><td>(34) 999778239</td><td>(99) 99977-8841</td></tr></table>";
console.log(regExp.test(table)); // true
console.log(regExp2.test(table2)); // true

// Nineth Example
// Metacaracteres
    // . - represents all caracters
    // \w - represents a conjunct: [a-zA-Z-0-9_]
    // \W - represents a conjunct: [^a-zA-Z-0-9_]
    // \d - represents a conjunct: [0-9]
    // \D - represents a conjunct: [^0-9]
    // \s - represents blank space
    // \S - represents a not blank space
    // \n - represents a line break
    // \t - represents a tab 
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}\-?\d{4}<\/td>)+<\/tr><\/table>/; // td repeat one or more
var table = "<table><tr><td>(80) 9977-7599</td><td>(99) 99966699</td><td>(34) 999778239</td><td>(99) 99977-8841</td></tr></table>";
console.log(regExp.test(table)); // true

// Tenth Example
// String API
    // match - executes asearch on a String an returns an arrays containing the found datas, or null.
    // split - divides a string with another based on regular expressions
    // replace - replace another string based on regular expressions
var regExp = /\(\d{2}\)\s\d{4,5}\-?\d{4}/; // td repeat one or more
var telefone = "<table><tr><td>(80) 9977-7599</td><td>(99) 99966699</td><td>(34) 999778239</td><td>(99) 99977-8841</td></tr></table>";
console.log(telefone.match(regExp)); // returned the first telephone

// Eleventh Example
// Modifiers - use on final of regular expression
    // i - Case-insensitive matching
    // g - Global matching
    // m - multiline matching
var regExp = /\(\d{2}\)\s\d{4,5}\-?\d{4}/g; // td repeat one or more
var telefone = "<table><tr><td>(80) 9977-7599</td><td>(99) 99966699</td><td>(34) 999778239</td><td>(99) 99977-8841</td></tr></table>";
console.log(telefone.match(regExp)); // returned the first telephone

// Twelfth Example
// Replace
    // i - Case-insensitive matching
    // g - Global matching
    // m - multiline matching
var regExp = /\(\d{2}\)\s\d{4,5}\-?\d{4}/g; // td repeat one or more
var telefone = "<table><tr><td>(80) 9977-7599</td><td>(99) 99966699</td><td>(34) 999778239</td><td>(99) 99977-8841</td></tr></table>";
console.log(telefone.replace(regExp,"TELEFONE")); // returned the first telephone