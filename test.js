let radiusOfCircles = [1,3,5,6,8,9]

function calculateDiameterOfCircles(radiusOfCircles){
    let diameterOfCircles = []
    for (let i=0;i<radiusOfCircles.length;i++){
        let diameter = 2*radiusOfCircles[i]
        diameterOfCircles.push(diameter)
    }
    return diameterOfCircles
}

let diameterOfCircles = calculateDiameterOfCircles(radiusOfCircles)
console.log(radiusOfCircles)
console.log(diameterOfCircles)

console.log("-----------------------------------------------------")

function calculateCircumferenceOfCircles(radiusOfCircles){
    let circumferencerOfCircles = []
    for (let i=0;i<radiusOfCircles.length;i++){
        let circumference = 2*Math.PI*radiusOfCircles[i]
        circumferencerOfCircles.push(circumference)
    }
    return circumferencerOfCircles
}

let circumferenceOfCircles = calculateCircumferenceOfCircles(radiusOfCircles)
console.log(radiusOfCircles)
console.log(circumferenceOfCircles)

console.log("-----------------------------------------------------")

function calculateCAreaOfCircles(radiusOfCircles){
    let areaOfCircles = []
    for (let i=0;i<radiusOfCircles.length;i++){
        let area = Math.PI*radiusOfCircles[i]*radiusOfCircles[i]
        areaOfCircles.push(area)
    }
    return areaOfCircles
}

let areaOfCircles = calculateCAreaOfCircles(radiusOfCircles)
console.log(radiusOfCircles)
console.log(areaOfCircles)