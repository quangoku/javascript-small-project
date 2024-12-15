const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.onclick = function () {

    let number = Math.floor(Math.random()*5);
    let audio = document.createElement("audio");

    audio.src=`${number}.mp3`;
    document.body.appendChild(audio);

    audio.play();

    setTimeout(() => {
      audio.remove();  
    }, 1000);
    
    console.log(number);

  };
});
