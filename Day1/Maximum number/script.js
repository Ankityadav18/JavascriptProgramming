function maximunInArray(arr){
    let max=-1000;
    let n=arr.length-1;
    for(let i=0;i<=n;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;

}

console.log(maximunInArray([-10,-5,-3,-9,-2]));