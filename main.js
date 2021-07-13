function getpara1(){
    var inputs=[]
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("input"+i).value);
    }
    document.getElementById("showpara1").innerHTML=inputs.join(".");
}
function getpara2(){
    var inputs=[]
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("input1"+i).value);
    }
    document.getElementById("showpara2").innerHTML=inputs.join(".");
}