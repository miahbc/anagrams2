listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

function anagramsFor(str,arr) {
let s = str.slice().split('')
let answer = []
let answer1 = []
for (let j=0; j<arr.length; j++) {
    let arr1 = []
    for (let i=0; i<s.length; i++) {
        let list = arr.slice()
        if (list[j].includes(s[i])) {
            arr1.push(s[i])} 
    } answer.push(arr1)
    // console.log(`word = ${arr.join('')}`)
    // console.log(`matched word = ${listOfWords[j]}`)
    if (arr1.join('').length == (arr[j]).length) {
        answer1.push(arr[j])}} 
    console.log(answer1)
}

console.log(anagramsFor("saltier", ["cognac", "saltier", "realist", "retails"]))
console.log(anagramsFor("threads", listOfWords))
// console.log(anagramsFor("threads", listOfWords)[0])
// console.log(anagramsFor("threads", listOfWords)[1])
// console.log(anagramsFor("threads", listOfWords)[2])
// console.log(anagramsFor("threads", listOfWords)[3])

// console.log(anagramsFor("apple", listOfWords).length)


// console.log(anagramsFor("threads", listOfWords).length == 4);
// console.log(anagramsFor("threads", listOfWords)[0] == "threads");
// console.log(anagramsFor("threads", listOfWords)[1] == "trashed");
// console.log(anagramsFor("threads", listOfWords)[2] == "hardest");
// console.log(anagramsFor("threads", listOfWords)[3] == "hatreds");

// console.log(anagramsFor("apple", listOfWords).length == 0);