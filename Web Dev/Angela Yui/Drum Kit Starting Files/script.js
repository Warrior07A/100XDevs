const button1=document.querySelector("#audio1");
const button2=document.querySelector("#audio2");
const button3=document.querySelector("#audio3");
const button4=document.querySelector("#audio4");
const button5=document.querySelector("#audio5");
const button6=document.querySelector("#audio6");
const button7=document.querySelector("#audio7");

document.addEventListener("keydown",function(e){
    if (e.key==='w'){
        playAudio();
    }
})


document.addEventListener("keydown",function(e){
    if (e.key==='a'){
        playAudio2();
    }
})
document.addEventListener("keydown",function(e){
    if (e.key==='s'){
        playAudio3();
    }
})
document.addEventListener("keydown",function(e){
    if (e.key==='d'){
        playAudio4();
    }
})
document.addEventListener("keydown",function(e){
    if (e.key==='j'){
        playAudio5();
    }
})
document.addEventListener("keydown",function(e){
    if (e.key==='k'){
        playAudio6();
    }
})
document.addEventListener("keydown",function(e){
    if (e.key==='l'){
        playAudio7();
    }
})
function playAudio(){
    button1.play()
}

function playAudio2(){
    button2.play()
}

function playAudio3(){
    button3.play()
}

function playAudio4(){
    button4.play()
}

function playAudio5(){
    button5.play()
}

function playAudio6(){
    button6.play()
}

function playAudio7(){
    button7.play()
}

