/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1")

const array1 = [1, 3, 5]
const reversed = array1.reverse()
console.log("reversed:", reversed)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 2")

const maximumNumbers = [35, 562, 12, 62541, 1, 3, 5624, 123, 7, 67, 82]
console.log(Math.max(...maximumNumbers))

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 3")

const minimumNumbers = [35, 562, 12, 62541, 2, 3, 5624, 123, 7, 67, 82]
console.log(Math.min(...minimumNumbers))

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 4")

const a = [35, 562, 12, 62541, 2, 3, 5624, 123, 7, 67, 82]
ar = []

for (let i = 1; i < a.length; i++) {
  if (i % 2 === 0) {
    // index is even
    ar.push(a[i])
  }
}

console.log({ ar })

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 5")

let array2 = [35, 562, 12, 62541, 2, 3, 5624, 123, 67, 82]
let removedEvenEntries = []
for (let i = 1; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    removedEvenEntries.push(array2[i])
    array2.splice(i, 1)
    i--
  } else {
    console.log("the odd entries will not be removed from the array")
  }
}
console.log({ removedEvenEntries })
console.log({ array2 })

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 6")

function remVowel(string) {
  let al = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  let result = []

  for (let i = 0; i < String.length; i++) {
    if (!al.includes(String[i])) {
      result += String[i]
    }
  }
  return result
}

/*let string =
  "baby " + "dog" + "must" + "surprise" + "stupid" + "finese" + "London" */

console.log(remVowel("surprise"))

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 8")

let words = ["strive", "is", "great"]
let wordsLength = []
for (let i = 0; i < words.length; i++) {
  wordsLength.push(words[i].length)
}
console.log({ wordsLength })
