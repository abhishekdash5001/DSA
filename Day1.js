// You are given an array of Integers in which each 
// subsequent value is not less than
//  the previous value. Write a function 
//  that takes this array as an input 
//  and returns a new array with the squares 
//  of each number sorted in ascending order.



let a = [-4, -2, 0, 3, 6];

function sqaureAndSort(array) {
    let newArray = Array(array.length);
 let leftPointer = 0;
 let rightPointer = array.length-1;

 for(let i=array.length-1;i>=0;i--){
    let leftElement = Math.pow(array[leftPointer],2)
    let rightElement  = Math.pow(array[rightPointer],2)
    if(leftElement > rightElement){
    newArray[i]= leftElement
    leftPointer++
    }else{
        newArray[i]= rightElement
        rightPointer--
    }
 }
 return newArray
}
console.log(sqaureAndSort(a));

// An array is monotonic if it is either monotone increasing or
//  monotone decreasing. An array is monotone increasing if
//   all its elements from left to right are non-decreasing. 
//   An array is monotone decreasing if all  its elements from 
//   left to right are non-increasing. Given an integer array
//    return true if the given array is monotonic, or false otherwise.

let a = [1, 2, 3, 4, -1];

function checkMonoTone(array) {
  let monoToneValues = '';
  let previousValue = 0;
  for (let i = 0; i < array.length; i++) {
    let e = array[i];
    if (i === 0) {
      previousValue = e;
    } else {
      if (previousValue > e) {
        if (monoToneValues == '') {
          monoToneValues = 'decreasing';
        } else if (monoToneValues === 'increasing') {
          return false;
        }
      } else {
        if (monoToneValues == '') {
          monoToneValues = 'increasing';
        } else if (monoToneValues === 'decreasing') {
          return false;
        }
      }
      previousValue = e;
    }
  }
  return true;
}
console.log(checkMonoTone(a));

//[3       3]
//[7        10]
//[10       1]
function checkMonoToneUdemyStyle(array){
    if(array.length ===0){
        return true
    }
    let first = array[0];
    let last = array[array.length-1];
    if(first === last){
        for (let i = 0; i < array.length; i++) {
   if(array[i+1] !== array[i]) return false
        }
    }else if(first > last){
        for (let i = 0; i < array.length; i++) {
        if(array[i+1] > array[i]) return false
        }
    }else{
    //   first <last
    for (let i = 0; i < array.length; i++) {
        if(array[i+1] < array[i]) return false
    }
    }
     return true

}
