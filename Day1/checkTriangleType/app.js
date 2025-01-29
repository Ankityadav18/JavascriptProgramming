function triangleType(x,y,z){
    if(x===y && y===z){
        return "Equilateral"
    }
    else if(x===y || y===z || x===z){
        return "Isosceles"
    }
    else{
        return "Scalene"
    }

}

console.log(triangleType(10,10,10));