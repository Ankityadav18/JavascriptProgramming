function sortArray(arr){
let newArray=arr;

    for(let i=0;i<newArray.length;i++){
        for(let j=i;j<=newArray.length;j++){


            if(newArray[i]>newArray[j]){
                temp=newArray[i];
                newArray[i]=newArray[j];
                newArray[j]=temp;
            }
        }
        

        }
        return newArray;
    }
   
console.log(sortArray([5,3,10,8]));