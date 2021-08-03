import { Grid } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { DateCard } from "./components/DateCard/DateCard";

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
    }
  })


  return (
    <>
    <div className="App">
      <Grid container>
        <Grid item xs={1} md={3}></Grid>
        <Grid item container xs={10} md={6} justifyContent="center" style={{textAlign:"center"}}>
          <div className="Title">Hamarosan jövünk!</div>
          <div className="Text">Mint minden versenyképes vállalat, mi is hiszünk a folyamatos változásban, így az indulásunk óta szerzett tapasztalatok alapján a ZENUIT, mint az egyik leginnovatívabb és leggyorsabban fejlődő közösség megújul.</div>
          <Grid container className="Dates" justifyContent="center">
            <Grid container style={{width: "80%", minWidth: "200px"}}>
              <Grid container xs={6} sm={3} item justifyContent="center">
                <DateCard num={timerDays} type="NAP"/>
              </Grid>
              <Grid container xs={6} sm={3} item justifyContent="center">
                <DateCard num={timerHours} type="ÓRA"/>
              </Grid>
              <Grid container xs={6} sm={3} item justifyContent="center">
                <DateCard num={timerMinutes} type="PERC"/>
              </Grid>
              <Grid container xs={6} sm={3} item justifyContent="center">
                <DateCard num={timerSeconds} type="MÁSODPERC"/>
              </Grid>
            </Grid>

          </Grid>
          <div className="Text">ZENUIT</div>
        </Grid>
        <Grid item xs={1} md={3}></Grid>
      </Grid>
    </div>
    </>
  );
}

export default App;
