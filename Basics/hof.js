// function hof(cb){
//     console.log("I am a higher order fucntion")
//     cb();
// }

// function cb(){
//     console.log("I am a callback")
// }

// hof(cb);

let radiusOfCircles = [1,3,5,6,8,9]

function calculate(radiusOfCircles,cb){
    let arr = [];
    for (let i = 0;i<radiusOfCircles.length;i++){
        let logic = cb(radiusOfCircles[i])
        arr.push(logic);
    }
    return arr
}

function calculateDiameterOfCircles(radius){
    return 2*radius;
}

function calculateCircumferenceOfCircles(radius){
    return 2*Math.PI*radius;
}

function calculateCAreaOfCircles(radius){
    return Math.PI*radius*radius;
}

let diameter = calculate(radiusOfCircles,calculateDiameterOfCircles)
console.log(diameter)
console.log("-----------------------------------------")
console.log("-----------------------------------------")
let circumference = calculate(radiusOfCircles,calculateCircumferenceOfCircles)
console.log(circumference)
console.log("-----------------------------------------")
console.log("-----------------------------------------")
let area = calculate(radiusOfCircles,calculateCAreaOfCircles)
console.log(area)