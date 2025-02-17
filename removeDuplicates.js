// no extra space

function removeDuplicates(arr){
    let j =0;
    for(let i =0;i<arr.length;i++){
        if(i ===0){
            arr[j]= arr[i];
            j++
        }else{
            if(arr[j-1] < arr[i]){
                arr[j]= arr[i];
                j++
            }

        }
    }

arr.length = j;
    console.log( arr,j)
}

let nums = [1, 1, 2, 2, 3,3,6,7,8,9];
removeDuplicates(nums)