function ispalindrome(str){
    
        var reverse =str.split("").reverse().join("");
       
        return str == reverse;
    }
    function isprime(n){
        for(var i =2;i<n;i++){
            if(n%i=== 0)return false;
            return n !== 1;
        }
    }
function solution(s) {
    // write your code in JavaScript (Node.js 8.9.4)
   var maxlength = 0;
   maxp = '';
   for(var i =0;i<s.length;i++){
       var sbst = s.substr(i,s.length);
       
       for(var j =sbst.length;j>=0;j--){
           var sbst_sbst = sbst.substr(0,j);
           if(sbst_sbst.length <=1)
           continue;
           if(ispalindrome(sbst_sbst)){
               if(sbst_sbst.length>maxlength){
                   maxlength = sbst_sbst.length;
                   maxp = sbst_sbst;
                   
               }
           }
       }
   }
   if(isprime(maxp.length)){
       return "YES";
   }
   else{
       return "NO";
   }
    
}
