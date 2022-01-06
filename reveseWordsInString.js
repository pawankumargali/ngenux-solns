/**
 * Given a string, reverse each word in the sentence
    I/p: hi i am a user since 2019
    o/p: ih i ma a resu ecnis 9102
 */

//O(n2)
function reverseWordsInSentence(str) {
    if(!str || str.length==0) return '';
    const words = str.split(" ");
    const result=[];
    for(let word of words) { 
        word = word.split("");
        for(let i=0; i<word.length/2; i++) {
            let temp = word[i];
            word[i] = word[word.length-1-i];
            word[word.length-1-i] = temp;
        }
        result.push(word.join(""));
    }
    return result.join(" ");
}


//O(n2) with js string methods
function reverseWordsInSentence_Optimum(str) {
    if(!str || str.length==0) return '';
    const words = str.split(" ");
    const result = words.map(word => word.split("").reverse().join(""));
   return result.join(" ");
}


