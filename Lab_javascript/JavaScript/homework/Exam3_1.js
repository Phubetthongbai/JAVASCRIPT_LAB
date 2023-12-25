/*
let values1= ['Apple',1,false];
let values2= ['Apple',2,true];
let values3= ['Apple',9,'Apple'];
*/

function areArraysEqual(arr1, arr2, arr3) {
    if (arr1.length !== arr2.length || arr1.length !== arr3.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i] || arr1[i] !== arr3[i]) {
            return false;
        }
    }

    return true;
}

let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

console.log(areArraysEqual(values1,values2,values3));

