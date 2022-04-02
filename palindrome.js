function reverse(string) {
    return Array.from(string).reverse().join("");
}

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    this.palindrome = function palindrome() {
        let processedContent = this.content.toLowerCase();
        return processedContent === reverse(processedContent);
    }
    this.louder = function() {
        return this.content.toUpperCase();
    }
}
