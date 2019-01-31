(function () {
    const vm = this;
    const EASY_LEVEL_NUMBER_OF_COLORS = 3;
    const HARD_LEVEL_NUMBER_OF_COLORS = 6;

    vm.initialize = () => {
        renderLevel();
    }

    vm.preSetDefault = () => {
        $('#message').text('');
        $('#message').addClass("alert-danger");
        $('#message').removeClass("alert-success");
        $('#header-color').removeClass("header");
        $('#header-color').addClass("header");
        $('#reset').text('NEW COLORS');
    }

    vm.renderLevel = (numberToRender = HARD_LEVEL_NUMBER_OF_COLORS) => {
        preSetDefault();
        let helper = 0, htmlRender = '';

        // Choosing Random Colors and printing the winner one
        randomColors(numberToRender);

        // Creating the game section html
        for (let i = 0; i < vm.colors.length; i++) {
            htmlRender += `<div id="element-${i}"class="game-element"></div>`;
        }
        $('#game-section').html(htmlRender);

        // Adding the color class to each element        
        vm.colors.forEach((element) => {
            $(`#element-${helper}`).css(classStylePropertieBuilder(element));
            helper++;
        });

        // Adding events binding
        setEventBindings()

    }

    vm.randomColors = (numberOfColors = HARD_LEVEL_NUMBER_OF_COLORS) => {
        vm.colors = [];
        for (let i = 0; i < numberOfColors; i++) {
            vm.colors[i] = {
                red: Math.floor((Math.random() * 256)),
                green: Math.floor((Math.random() * 256)),
                blue: Math.floor((Math.random() * 256))
            };
        }
        const winnerPosition = Math.floor(Math.random() * numberOfColors);
        vm.winnerColor = vm.colors[winnerPosition];
        $('#rgb-colors').text(`RGB(${vm.winnerColor.red}, ${vm.winnerColor.green}, ${vm.winnerColor.blue})`);
    }

    vm.levelDecisor = (difficulty = 'hard') => {
        $('#header').css("background:", "steelblue");
        difficulty === 'hard' ? renderLevel(HARD_LEVEL_NUMBER_OF_COLORS) : renderLevel(EASY_LEVEL_NUMBER_OF_COLORS);
    }

    vm.classStylePropertieBuilder = (colorVector) => {
        return { background: `rgb(${colorVector.red},${colorVector.green},${colorVector.blue})` }
    }

    vm.setEventBindings = () => {
        for (let i = 0; i < vm.colors.length; i++) {
            if (vm.colors[i] !== vm.winnerColor) {
                $(`#element-${i}`).on("click", (e) => {
                    $('#message').text('Try Again');
                    $(e.currentTarget).css("background", "black");
                });
            } else {
                $(`#element-${i}`).on("click", () => {
                    winnerChangeStyle();
                });
            }
        }
    }

    vm.winnerChangeStyle = () => {
        $('#message').text('Correct');
        $('#message').removeClass("alert-danger");
        $('#message').addClass("alert-success");
        $('#reset').text('PLAY AGAIN?');
        $('.game-element, .header').css(classStylePropertieBuilder(vm.winnerColor));
        $('.game-element').off('click');
    }

    $("#reset").on("click", (e) => {
        //initialize();
        openModal();
    });

    this.openModal = () => {
        
    }

    // Adding class toggle on event click
    // ES6 arrow functions
    $(".mode").on("click", (e) => {
        $(".mode").removeClass("mode-selected");
        $(e.currentTarget).toggleClass("mode-selected");
        levelDecisor($(e.currentTarget).attr("id"));
    });

    // ES5 mode
    /*
        $(".mode").on("click", function () {
            $(".mode").removeClass("mode-selected");
            $(this).toggleClass("mode-selected");
            levelDecisor($(this).attr("id"));
        });
    */
    initialize();
}());