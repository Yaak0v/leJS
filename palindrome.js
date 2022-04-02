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
    this.processor = function(string) {
        return string.toLowerCase();
    }
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
    this.louder = function() {
        return this.content.toUpperCase();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }
}

TranslatedPhrase.prototype = new Phrase();