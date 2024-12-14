
document.addEventListener('mousedown',(e)=>{
    let p = document.createElement("p");
  

    p.classList="miaw";
    p.textContent="MIAW";
    p.style.left=e.clientX+"px";
    p.style.top=e.clientY+"px";
    p.style.color= `rgb(${Math.random()*100},${Math.random()*100},${Math.random()*100})`;
    
    let sound = document.createElement("audio");
    
    sound.src="miaw.mp3";

    document.body.append(p);
    document.body.append(sound);
    sound.play();

    setTimeout(() => {
        p.remove();
        sound.remove();
    }, 1000);
})