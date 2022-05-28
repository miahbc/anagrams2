// Can you translate this driver code to unit tests?

var ana = require("./anagrams2"),
listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

anagrams_for("saltier", ["cognac", "saltier", "realist", "retails"]) == ["saltier", "realist", "retails"]
console.log(ana.anagramsFor("threads", listOfWords).length == 4);
console.log(ana.anagramsFor("threads", listOfWords)[0] == "threads");
console.log(ana.anagramsFor("threads", listOfWords)[1] == "trashed");
console.log(ana.anagramsFor("threads", listOfWords)[2] == "hardest");
console.log(ana.anagramsFor("threads", listOfWords)[3] == "hatreds");

console.log(ana.anagramsFor("apple", listOfWords).length == 0);
