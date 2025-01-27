function findTheOppositeBinaryCode(string)
{ 
    if(string === ''){
       return '0'
    }
    else if(string === '0'){
return '01'
    }
    let firstHalf='';
    let secondHalf='';
  let s = string.substr(0,string.length/2);
  
  for(let i =0;i<s.length;i++){  //n/2
      if(s[i]=== '0'){
        firstHalf = firstHalf+'01';
        secondHalf = secondHalf+'10'  //m
      }else{
          firstHalf = firstHalf+'10';
        secondHalf = secondHalf+'01'
      }
  }
  return firstHalf+secondHalf;
}

function findKthElementNthRow(nthRow,KthElement){
    let string ='';
    for(let i =1;i<=nthRow;i++){
            string=    findTheOppositeBinaryCode(string);//O(n^2)   2 + 4 
           
            
    }
    return string.charAt(KthElement-1)
}

console.log(findKthElementNthRow(6,19))