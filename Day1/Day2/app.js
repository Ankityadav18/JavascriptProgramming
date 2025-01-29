function Occurences(str,character){

   str=str.toLowerCase();
   console.log(str);
   let word=str.split('');
   console.log(word);


   character=character.toLowerCase();
   

   let cnt=0;
   for(let i=0;i<word.length-1;i++){
    if(word[i]===character){
        cnt++;
    }
   }
   return cnt;
    

}

console.log(Occurences("satyAm","A"));
