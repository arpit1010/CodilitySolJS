function solution(M) {
    M = JSON.parse(M);
    var output = "";
    for(var i =0; i <M.length;M++){
        var one_d = M[i]
        for(var j=0;j<one_d.length;j++){
            if(one_d[j] == 1){
                if(output.length>0){
               output = output+","+j.toString(); 
                }
                else{
                    output = output+j.toString();
                }
               
            }else if(one_d[j] == 0){
                output = output+"|"+j.toString(); 
                 
            }
        }
    }
    return output;
    // M is now your relationship matrix SxS
}
