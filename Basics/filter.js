let arr = [1,2,3,4,5,6,7,8,9,10];

//expected output [2,4,6,8,10]

// function even (arr){
//     let filteredArr = [];
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr
// }

// let evenArr = even(arr);
// console.log(evenArr);

let evenArr = arr.filter(function(ele){
    return ele%2==0;
})
console.log(evenArr);