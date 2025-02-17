let nums =[1,2,2,3,7,8];


function remove(params,val) {
    let j =0;
  for(let i =0;i<params.length;i++){
    if(params[i]!== val){
        if(j < params.length){ 
            params[j] = params[i];  
            j++     
        }
                  
    }
 
}
params.length = j;
return j
}
remove(nums,7)

// let j =0;
// for(let i =0;i<params.length;i++){
//     if(params[i]!== val){
//         j++
//         params[j] = params[i];              
        
        
//     }
//    else{
// params = params.filter((e)=>e !==val)
//        params.push(val)
//    }
   
// }
// return j

