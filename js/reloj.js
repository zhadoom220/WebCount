
// Funcion anonima reloj
const d = document;
(function () {
    try {
        setInterval(() => {
        let reloj = new Date().toLocaleTimeString();
        d.getElementById('reloj').innerHTML = `<h3>${reloj}</h3>`
        }, 1000);
    }catch (error){
        console.error("Hubo un error : ",  error);
    }  
}());

////Funcion Alarma
const audio = document.createElement("audio");
audio.src = 'alarm-clock.mp3';

(function () {
    const iniciar = d.getElementById('activar');
    iniciar.addEventListener('click', (e)=>{
        setTimeout(() => {
            audio.play();              
        }, 0);
        iniciar.disabled=true; 
    })
    
}());

(function () {
    const detener = d.getElementById('desactivar');
    const iniciar = d.getElementById('activar');
    detener.addEventListener('click', e=>{
        clearTimeout();
        audio.pause();
        iniciar.disabled=false;
    }) 
}());


 

