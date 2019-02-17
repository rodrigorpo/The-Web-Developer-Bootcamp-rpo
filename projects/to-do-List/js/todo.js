(function () {

    $("ul").on("click", "li", ((e) => {
        $(e.currentTarget).toggleClass("completed");
    }));

    $("ul").on("click", "span", (e) => {
        $(e.currentTarget).parent().fadeOut(500, () => {
            $(e.currentTarget).remove()
        });
        e.stopPropagation();
    });

    $("input[type='text'").keypress((e) => {
        if (e.which === 13) {
            const todoText = $(e.currentTarget).val();
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
        }
    });

    $(".fa-plus").click(() => {
        $("input[type='text']").fadeToggle();
    });
}());