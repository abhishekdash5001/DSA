function findMaxMin(arr){
    if(arr.length === 0){
        return "array is empty"
    }
    
    let a=[];
    for(let i =0; i<arr.length;i++){
        let e = arr[i];
        if(i===0){
            a =[e,e]
        }else{
            if(e > a[1]){
                a[0]= e
            }else if(e < a[0]){
                 a[1]= e
            }
        }
    }

    return a
    
}
let myArray = [1.1, 2.2, 0.9, 3.7];
console.log(findMaxMin(myArray))




