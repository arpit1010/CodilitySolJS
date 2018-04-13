function arrayToWord(element){
    var firstWordArr = element[0].split("");
    var secondWordArr = element[1].split("");
    var sortedArray = firstWordArr.concat(secondWordArr).sort();
    var word = "";
    var word2 = "";
    
for(var i=0;i<secondWordArr.length;i++){
    for(var j=i; j<firstWordArr.length;j++){
        if(firstWordArr[j]<secondWordArr[i]){
            word = word+firstWordArr[j];
           
        }else if(firstWordArr[j]>secondWordArr[i]){
            word = word+secondWordArr[i];
            
        }
    }
}
word = word.substring(0,firstWordArr.length)+word.substring(firstWordArr.length+1,word.length)+sortedArray[sortedArray.length-1];


    return word;
}

function solution(string){

    var mainArr = string.split(",");
    var slicefactor = parseInt(mainArr[0]);
    mainArr.shift();
    var chunkArr = [];
    var wordsArr = [];
    for(var i=0;i<slicefactor;i++){
        chunkArr.push(mainArr.splice(0,2));
    }
    chunkArr.forEach(element => {
        wordsArr.push(arrayToWord(element));
    });

    console.log(wordsArr.join(","))

}
//solution("2,JAY,ROB,CAT,DOG");
