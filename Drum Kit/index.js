// get the length of drum buttons

// DETECTING BUTTON PRESS
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);  // this function is anonim function
}

 function handleClick() {
    let buttonInnerHTML = this.innerHTML;
    this.style.color = "black";    // change the text color, when click the button

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);    // onna add the animation to buttons. When we click the button,
 }
 

// DETECTING KEYBORAD PRESS
document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);            // gonna add the animation to buttons. When we press the key on keyboard,
    
});

function makeSound(key) {

    switch(key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(key);
    }
 }

// ADD ANIMATION TO BUTTONS 
function buttonAnımation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

  // remove the class after 1 seconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
