document.addEventListener("DOMContentLoaded", function() {
    var btnOne = document.getElementById("onebtn");
    var btnTwo = document.getElementById("twobtn");
    var btnReset = document.getElementById("resetbtn");
    var inputNumber = document.getElementsByTagName("input");
    var limitPoints = 3, s1=0, s2=0;

    btnOne.addEventListener("click",function(){
        if(s1 < limitPoints && s2 < limitPoints){
            s1++;
            document.querySelector("#one").textContent = s1;
        }
        if(s1 = limitPoints){
            document.querySelector("#one").style.color = "green";
        }      
    });
    
    btnTwo.addEventListener("click",function(){
        if(s1 < limitPoints && s2 < limitPoints){
            s2++;
            document.querySelector("#two").textContent = s2;
        }
        if(s2 = limitPoints){
            document.querySelector("#two").style.color = "green";
        }        
    });

    btnReset.addEventListener("click",function(){
        s1 = 0;
        s2 = 0;
        document.querySelector("#one").textContent = s1;
        document.querySelector("#two").textContent = s2;
        document.querySelector("#one").style.color = "black";
        document.querySelector("#two").style.color = "black";
    });
    


});