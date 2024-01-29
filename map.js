let radiusOfCircles = [1,3,5,6,8,9]

// function calculate(radiusOfCircles,cb){
//     let arr = [];
//     for (let i = 0;i<radiusOfCircles.length;i++){
//         let logic = cb(radiusOfCircles[i])
//         arr.push(logic);
//     }
//     return arr
// }

function calculateDiameterOfCircles(radius){
    return 2*radius;
}

function calculateCircumferenceOfCircles(radius){
    return 2*Math.PI*radius;
}

function calculateCAreaOfCircles(radius){
    return Math.PI*radius*radius;
}

//map function will pass each element of the array to the function passed in it as a param
//Here in  --> diameter = radiusOfCircles.map(calculateDiameterOfCircles)
//each element of radiusOfCircles will be passed to calculateDiameterOfCircles and 
//The output will be a list which will be assigned to the diamater variable

//let diameter = calculate(radiusOfCircles,calculateDiameterOfCircles)
let diameter = radiusOfCircles.map(calculateDiameterOfCircles)
console.log(diameter)

//let circumference = calculate(radiusOfCircles,calculateCircumferenceOfCircles)
let circumference = radiusOfCircles.map(calculateCircumferenceOfCircles)
console.log(circumference)

//let area = calculate(radiusOfCircles,calculateCAreaOfCircles)
let area = radiusOfCircles.map(calculateCAreaOfCircles)
console.log(area)

console.log("---------------------------------------")
console.log("----------------Example----------------")
console.log("---------------------------------------")

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const inrToUsd = 82;

function convertFunc(inr){
    return inr/inrToUsd
}

let convertedVal = transactions.map(convertFunc)
console.log(convertedVal)