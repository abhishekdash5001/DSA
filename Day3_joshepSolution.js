//Appraoch 1
//Time O(n^2)
//space O(n)
function findTheLastWinner(n,k){
let array = Array.from({length:n}).map((_,i)=>{
   return i+1;
});

function killLogithim(a,index){
if(a.length === 1){
   return a[0];

}
let eleminationIndex = (index+k-1)%array.length;
a.splice(eleminationIndex,1);

 return killLogithim(a,eleminationIndex)


  
}

 
 return killLogithim(array,0)
}

console.log(findTheLastWinner(5,2))


//second approach


function findtheWinnerSecondApprach(n,k){

   function rrr(n){
      if(n ===1){
         return 0
      }
    return  (rrr(n-1)+k)%n
   }

   return  rrr(n)+1
   
      
   
}

console.log(findtheWinnerSecondApprach(5,2))


//apprach 3

function approachThree(n,k){
   let counter = 0;
   if(n == 1){
      return counter+1;
   }
   for(let i =2;i<=n;i++){
      counter = [counter+k]%i
   }

   return counter+1

}
approachThree(5,3)