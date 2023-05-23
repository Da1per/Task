const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
let stateOn=false
const createTimerAnimator = () => {
  
  return (seconds) => {
  
  let timer=  setInterval(()=>{
      if(!stateOn){clearInterval(timer)}
      h=(seconds>3600)?Math.trunc((seconds/60)/60):0
      m=(seconds>60&&seconds<3600)?(Math.trunc(seconds/60)):Math.trunc((((seconds/60)/60)-Math.trunc((seconds/60)/60))*60)
      s=(seconds<60)?seconds:(Math.round(((seconds/60)-Math.trunc(seconds/60))*60))
      timerEl.innerHTML=`${(String(h).length>1)?h:`0${h}`} : ${(String(m).length>1)?m:`0${m}`} : ${(String(s).length>1)?s:`0${s}`}`
      seconds--
      if(seconds<0){clearInterval(timer)}
    },1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  
  inputEl.value=inputEl.value.split(/\D/).join("")
  // Очистите input так, чтобы в зkначении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  stateOn=(stateOn)?false:true
  animateTimer(seconds);

  inputEl.value = '';
});
