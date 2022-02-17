// Write your code below
// function isPalindrome(str) {
//     var re = /[\W_]/g
//     var lowRegStr = str.toLowerCase().replace(re, '')
//     var reverseStr = lowRegStr.split('').reverse().join('')
//     console.log(lowRegStr)
//     console.log(reverseStr)
//     return reverseStr===lowRegStr
// }
// console.log(isPalindrome("A man, a plan, a canal. Panama"))

// function isPalindrome(str) {
//     var lowRegStr = str.toLowerCase().replace('')
//     var reverseStr = lowRegStr.split('').reverse().join('')
//     console.log(lowRegStr)
//     console.log(reverseStr)
//     return reverseStr===lowRegStr
// }
// console.log(isPalindrome("Racecar"))

function isPalindrome(str) {
    let splitStr = str.split('')
    let reverseArr = splitStr.reverse()
    let joinArr = reverseArr.join('')
    //console.log(joinArr)
    return str === joinArr
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('racecars'))

// function isPalindrome(str){
//     let newStr = ''
//     for(i=str.length; i<=0; i--){
//         newStr += newStr[i]
//     }console.log(newStr)
// }
// console.log(isPalindrome('racecar'))