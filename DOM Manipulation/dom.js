var h1 = document.querySelector("h1");

//h1.textContent = "Mudei";
var isBlue = false;

// setInterval(function(){
//     if(isBlue){
//         document.querySelector("body").style.background = "white";
//     }
//     else {
//         document.querySelector("body").style.background = "red";
        
//     }
//     isBlue = !isBlue;
    
// },1000);

var all_id = document.getElementById("l1");
var all_class = document.getElementsByClassName("bolded");
var all_elements_byTag = document.getElementsByTagName("li");
console.dir(all_id);
console.dir(all_class);
console.log("hello mae");
console.dir(all_elements_byTag);

// Query: select only the first match | Queryall : all matches --> Both returns a list of objects even with there are only one,
// meanwhile the "getElement" method returns the object itself
// Use the css format to get items on querySelector
// .class for classes, #id for ids, name for tags etc
// It selects only the first object that attends the propose
