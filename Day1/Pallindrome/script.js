function pallindrome(str){
    str=str.toLowerCase();
    console.log(str);

    str=str.split('');
    console.log(str);
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i]==str[j]){
            return "pallindronme";
            i++;
            j--;
        }
        else{
            return "not pallindrome";
        }
    }


}
console.log(pallindrome("Madam"));