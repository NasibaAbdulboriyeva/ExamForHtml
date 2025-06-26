//1
function ReturnMostRepeated(str=[]){

    let count = {};
    let maxCount = 0;
    let mostRepeated = ' ';

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
        if (count[char] > maxCount) {
            maxCount = count[char];
            mostRepeated = char;
        }
    }

    return mostRepeated;


}
//console.log(ReturnMostRepeated([1,2,2,3,3,3,4,4,])); 

//2
function StartWithUpperCase(str) {
   
    let str1 = ' ';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            str1 += str[i].toUpperCase();
            continue;
        }
        if (str[i] ===' ') {//hello world
            str1 += str[i]; // for space
            str1 += str[i+1].toUpperCase();
            i++; 
           continue;
        } 
        else {
            str1 += str[i];
        }
    }
    return str1;
}
console.log(StartWithUpperCase('hello world')); 

//3
//console.log(IsPalindrome('madam')); 
//console.log(IsPalindrome('hello'));   
function IsPalindrome(str) {
  
    let str1='';
   
    for(let i=str.length-1;i>=0;i--){
        str1+=str[i];
    }
    if(str1!=str){
        return 'false';
      
}
    else{
        return 'true';
    }
  

}




