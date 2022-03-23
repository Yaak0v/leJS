let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


// imperative version 
let imperativeUrls = (elements) => {
    let urls = [];
    elements.forEach((element) => {
        urls.push(element.toLowerCase().split(/\s+/).join("-"));
    });
    return urls;
}
console.log(imperativeUrls(states));

// functional version
function functionalUrls(elements) {
    return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
}
console.log(functionalUrls(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n;});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// Lengths: Functional Solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));