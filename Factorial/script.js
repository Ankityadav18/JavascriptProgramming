function factorial(num){

    if(num===0 || num==1 ){
        return 1;
    }

       let fact=1;   
    for(let i=1;i<=num;i++){
 fact= fact* i
        
    }
    return fact;
}
console.log(factorial(5));