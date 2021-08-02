import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("September 1, 2021 00:00:00").getTime();

    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000*60*60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      if(distance < 0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    },1000);
  }

  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current);
    }
  })

  return (
    <>
    <div className="App">
      <div class="bg-g1 size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1">
        <span></span>
        <div class="flex-col-c p-t-50 p-b-50">
          <h3 class="l1-txt1 txt-center p-b-10">
            Hamarosan jövünk!
          </h3>

          <p class="txt-center l1-txt2 p-b-60">
            Weboldalunk jelenleg fejlesztés alatt áll!
          </p>

          <div class="flex-w flex-c cd100 p-b-82">
            <div class="flex-col-c-m size2 how-countdown">
              <span class="l1-txt3 p-b-9 days">{timerDays}</span>
              <span class="s1-txt1">Nap</span>
            </div>

            <div class="flex-col-c-m size2 how-countdown">
              <span class="l1-txt3 p-b-9 hours">{timerHours}</span>
              <span class="s1-txt1">Óra</span>
            </div>

            <div class="flex-col-c-m size2 how-countdown">
              <span class="l1-txt3 p-b-9 minutes">{timerMinutes}</span>
              <span class="s1-txt1">Perc</span>
            </div>

            <div class="flex-col-c-m size2 how-countdown">
              <span class="l1-txt3 p-b-9 seconds">{timerSeconds}</span>
              <span class="s1-txt1">Másodperc</span>
            </div>
          </div>

          <button class="flex-c-m s1-txt2 size3 how-btn"  data-toggle="modal" data-target="#subscribe">
            Kövess minket a legújabb hírekért!
          </button>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
