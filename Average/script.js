function average( array){
   let result= array.reduce((acc,currVal)=>{
      return acc+currVal;
        
    })

    return result/array.length;


}
console.log(average([10,10,10,10]));