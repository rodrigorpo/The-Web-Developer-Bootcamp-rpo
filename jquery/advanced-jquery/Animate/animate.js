// Animate

$("button").on("click", function(){
    console.log("clicked")
    $("section").animate({width:'toggle'},1000); // reduces the width to 0 and hide the display of selected
});

