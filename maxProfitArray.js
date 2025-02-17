function maxProfit(arr){
let buy=0;
let sell = 0;
let minBuyPrice= Infinity;

let profit =0;
for(let i =0;i<arr.length;i++){
  
   if(arr[i]<minBuyPrice){
    buy = arr[i];
   minBuyPrice= arr[i]
   }
  let currentProfit  = arr[i]-minBuyPrice;
 
  if(profit < currentProfit){
    profit = currentProfit;
    sell = arr[i]
  }


}

console.log(profit,buy,sell)
}
let prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices)