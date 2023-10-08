
// Adding Event Listener to all the buttons
const drumButtons = document.querySelectorAll('.drum');

// function handleClick() {
//     console.log("I got clicked!");
// }

// for (var i=0; i<document.drumButtons.length; i++) {
//     drumButtons[i].addEventListener('click', handleClick);
// }

// Anonymous function used in addEventListener
for (var i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function() {
    //    Using Switch statements to add audio for different instruments
    switch (this.innerHTML) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log("No instruments found");
            break;
    }
    })
}
