function rotate(arr,k){
  let n = arr.length;
  if(k <0){
    k = n+k;
  }
  k = k%n;
  reverse(arr,0,n-1)
  reverse(arr,0,k-1)
  reverse(arr,k,n-1)
return arr
}
function reverse(arr,start,end){
    while(end>start){
    let temp = arr[start];
    arr[start]= arr[end];
    arr[end]= temp;
    start++;
    end--
    }
}
let arr = [5, 6, 7, 8]
console.log(rotate(arr,-1))