// Effects

// Fades in and out - display is hide but the element keep on
// Can perfoms the elements to transparent/full color and define some thing
$('.button').on('click', function () {
    $('div').fadeOut(1000, function () {
        console.log("Full fadeout");
        alert("Full fadeout");
        // To execute a function only after the fade, pass as an argument
    }); // It executes for each element
});

$('.button-remove').on('click', function () {
    $('div').fadeOut(1000, function () {
        $(this).remove(); // Needs to be in the right place, cause it needs to wait the fade
    }); 
});

// FadeIn works the reverse

//FadeToggle

$('.button-toggle').on('click', function () {
    $('div').fadeToggle(1000, function () {
    }); 
});

// Slide down and up

$('.button-toggle').on('click', function () {
    $('div').slideDown(1000, function () {
    }); 
});

// Slide toggle
$('.slide-toggle').on('click', function () {
    $('div').slideToggle(1000, function () {
    }); 
});