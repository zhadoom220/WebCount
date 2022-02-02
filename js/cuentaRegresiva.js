const d = document;
const w = window;
const n = navigator;

d.addEventListener('DOMContentLoaded', (e) => { // Cuando el DOM esté listo

   //Parametro del selector para cambio de tema
   themeDark('.dark-theme-btn', 'dark-mode'); //Cambiar tema a oscuro

  //Parametro del selector HTMl del input y tarjetas
   //search('.card-filter', '.card');

   //objetivo de fecha
   const DATE_TARGET = new Date('21/06/2022 0:00 AM'); //Fecha de objetivo en formato Date

   let tempo; //Variable para el intervalo de tiempo de la cuenta regresiva 
   
   const TEMPO = d.getElementById('count'); //Elemento del contador de tiempo
   //Variables para Calculo
   const MILLISECONDS_OF_A_SECOND = 1000; //Milisegundos de un segundo
   const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60; //Milisegundos de un minuto
   const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60; //Milisegundos de una hora
   const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24; 

   function updateCountdown() { //Funcion para actualizar el contador de tiempo
      const NOW = new Date()
         const DURATION = DATE_TARGET - NOW;
            if (DURATION < 0) {
                  clearInterval(tempo);
                  TEMPO.innerHTML = '<h3> *** Hora Feliz !!***</h3>' 
                  return; //Termina la ejecucion
               }
      const DIAS_FALTANTES = Math.floor(DURATION / MILLISECONDS_OF_A_DAY); //Calculo de dias
      const HORAS_FALTANTES = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR); //Calculo de horas
      const MINUTOS_FALTANTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE); //Calculo de minutos
      const SEGUNDOS_FALTANTES = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND); //Calculo de segundos

      //Render
      const FOBJETIVO = DATE_TARGET.toLocaleDateString('es-MX'); //Fecha objetivo en formato local
      TEMPO.innerHTML = `<h3>${DIAS_FALTANTES} dias ${HORAS_FALTANTES} horas ${MINUTOS_FALTANTES} minutos ${SEGUNDOS_FALTANTES} segundos </h3><b>`; //Render del contador
      TEMPO.innerHTML += `<h3>Fecha Objetivo : ${FOBJETIVO}</h3>`; //Render del contador
      

   };
   updateCountdown(); //Inicializacion del contador
   tempo = setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND); //Intervalo de tiempo para actualizar el contador


   ///***Thema Oscuro */
   function themeDark(btn, classDark) { //Funcion para cambiar el tema a oscuro
      const THEME_DARK = d.querySelector(btn);
      const SELECTOR = d.querySelectorAll("[data-dark]");

      //Variables para el DOM
      let moon = "🌑"; //Icono de la luna en oscuro
      let sun = "☀️"; 

      //Evento de Cambio
      d.addEventListener("click", (e) => {  //Evento de click
         if (e.target.matches(btn)) {
            // console.log(THEME_DARK.textContent) 
            if (THEME_DARK.textContent === moon) {                
               SELECTOR.forEach(el => el.classList.add(classDark));
               THEME_DARK.textContent = sun;
            }else {
               SELECTOR.forEach(el => el.classList.remove(classDark));
               THEME_DARK.textContent = moon;
            }
         }
      });
   }
   //***Fin Thema Oscuro */
});
