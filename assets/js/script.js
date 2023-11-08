function increaseNumber() {
  let span = document.getElementById("number");
  let number = parseInt(document.getElementById("number").innerText);

  number += 1;

  span.innerText = number;
}

let button = document.getElementById("increase");
let reset = document.getElementById("reset");
let sound = document.getElementById("sound");

var audioPlayer = document.getElementById("audioPlayer");

function playAudio() {
  audioPlayer.play(); // Müziği başlat
}
function pauseAudio() {
  audioPlayer.pause(); // Müziği durdur
}

button.addEventListener("click", function () {
  if (sound.pause) {
    sound.play();
    console.log("müzik çalındı");
    increaseNumber();
  } else {
    console.log("müzik çalınmadı", Error);
    increaseNumber();
  }
});

reset.addEventListener("click", function () {
  if (sound.pause) {
    sound.play();
    console.log("müzik çalındı");
  } else {
    console.log("müzik çalınmadı", Error);
  }
});

reset.addEventListener("click", function () {
    let span = document.getElementById("number");
  let number = parseInt(document.getElementById("number").innerText);
    if(number >= 1){
        number = 0;
        span.innerText = number
        
    }
})