

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case 'w':
            var tmo1 = new Audio('sounds/tom-1.mp3');
            tmo1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tmo3 = new Audio('sounds/tom-3.mp3');
            tmo3.play();
            break;
        case 'd':
            var tmo4 = new Audio('sounds/tom-4.mp3');
            tmo4.play();
            break;
        case 'j':
            var tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;
        case 'k':
            var tom6 = new Audio('sounds/crash.mp3');
            tom6.play();
            break;
        case 'l':
            var tom7 = new Audio('sounds/kick-bass.mp3');
            tom7.play();
            break;

        default:
            console.log("Default");
            break;
    }
}

function buttonAnimation(currentKey) {

    var buttonPressed = document.querySelector("." + currentKey);

    buttonPressed.classList.add("pressed");
    
    setTimeout(() => {
        buttonPressed.classList.remove("pressed");
    }, 100);

}