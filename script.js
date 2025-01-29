// "This is javascript programming language";
function isLongestWord(sentences){

    if(sentences.trim().length===0){
       return false;
    }
    words=sentences.split(" ");

    // words=words.sort((a,b)=> a.length-b.length);
    console.log(words);
    
    // return words.at(-1);
    let high=""
    for(let i=0;i<words.length;i++){
        if(words[i].length>high.length){
            high=words[i]
        }
    }
   return high


}
console.log(isLongestWord("This is javascript programming language"));