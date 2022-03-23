let a = ["ant", "bat", "cat", 42];

a.forEach(function(element) {
    console.log(element);
})

let soliloquy = "to be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character) => {
    console.log(character);
})