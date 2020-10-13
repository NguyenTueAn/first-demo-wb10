// function printManyTimes() {
//     console.log("many")
//     console.log("many")
//     console.log("many")
//     console.log("many")
//     console.log("many")
//     console.log("many")

// }

// let printTwoTimes = function() {
// console.log("two")
// console.log("two")
// }

// printTwoTimes()
// printManyTimes()

//FUNCTION : 2 loại cơ bản
//1 . Không thuần khiết
let x = 1
function changeNum() {
    x = 2
}

changeNum()
// console.log(x)

//2 . Thuần khiết   

let y = 2
function findSum(a, b) {
 return a + b
}

 let result = [findSum(5, 7), findSum(1,2)]
 console.log(result)