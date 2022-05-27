

console.log(anagramsFor("threads", listOfWords))
console.log(anagramsFor("threads", listOfWords)[0])
console.log(anagramsFor("threads", listOfWords)[1])
console.log(anagramsFor("threads", listOfWords)[2])
console.log(anagramsFor("threads", listOfWords)[3])

console.log(anagramsFor("apple", listOfWords).length == 0);


console.log(anagramsFor("threads", listOfWords).length == 4);
console.log(anagramsFor("threads", listOfWords)[0] == "threads");
console.log(anagramsFor("threads", listOfWords)[1] == "trashed");
console.log(anagramsFor("threads", listOfWords)[2] == "hardest");
console.log(anagramsFor("threads", listOfWords)[3] == "hatreds");

console.log(anagramsFor("apple", listOfWords).length == 0);