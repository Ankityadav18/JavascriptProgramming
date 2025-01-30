function arrayIsEqual(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
   return  arr1.every((val,idx)=>val===arr2[idx]);

}

console.log(arrayIsEqual([1,2,3,4],[1,2,3,4]));