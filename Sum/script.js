function sum(num){
   let sum=0;
while(num>0){
   let rem=num%10;
   num/=10;
   sum= Math.floor(sum+rem);
}
   return sum
}



console.log(sum(123456));