function removeDuplicates(array){
    let newArray=[...new Set(array)];
    return newArray

}

console.log(removeDuplicates([1,2,3,2,1,4]));