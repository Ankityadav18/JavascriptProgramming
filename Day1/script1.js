const generateHash=(str)=>{

    if(str.trim().length===0 || str.length>280){
        return false;
    }

    str=str.split(" ");
    str=str.map((e)=>{
        console.log(e);
        e.replace(e[0],e[0].toUpperCase())
    })
    console.log(str);

}

console.log(generateHash("My name is ankit yadav"));