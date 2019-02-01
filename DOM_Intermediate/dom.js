document.addEventListener("DOMContentLoaded", function() {
var btn = document.querySelector("button");
var bol = true;

btn.addEventListener("click", function(){
    if(bol){
        document.body.style.background = "red";
    }
    else{
        document.body.style.background = "white";
    }
    bol = !bol;
});
})