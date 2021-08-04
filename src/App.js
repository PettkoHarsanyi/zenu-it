import { Grid, Modal, Typography, Paper } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { DateCard } from "./components/DateCard/DateCard";
import logo from "./logo.png";
import ParticleBackground from './ParticleBackground';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [popupState, setPopupState] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [subTexts, setSubTexts] = useState([]);

  let interval = useRef();

  const handlePopup = (text,s1,s2,s3,s4) =>{
    setPopupState(prev => !prev);
    setPopupText(text);
    setSubTexts([s1,s2,s3,s4]);
  }

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
    <div className="Bg" />
    <ParticleBackground />
    <img className="Logo" src={logo} alt="logo"/>
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
          <ScrollAnimation animateIn="animate__slideInUp">
            <div className="Text bordered">ZENUIT</div>
          </ScrollAnimation>

          <Grid container justifyContent="space-evenly" style={{margin:"20vh 0 10vh 0"}}>
            <Grid item xs={8} sm={3} container justifyContent="center">
              <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                <div onClick={()=>handlePopup("Egyetemek","Innovatív nyílt nap", "Újgenerációs állásbörze","Pályázatok","Szakmai előadások")} className="Popup">
                  Egyetemek
                </div>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={8} sm={3} container justifyContent="center">
              <ScrollAnimation animateOnce animateIn="animate__fadeInUp">

                <div onClick={()=>handlePopup("Vállalatok","Álláshirdetések","Megjelenés","CSR","Network")} className="Popup">
                  Vállalatok
                </div>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={8} sm={3} container justifyContent="center">
              <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                <div onClick={()=>handlePopup("Diákok","MentorME","IncubIT","Network","Academy")} className="Popup">
                  Diákok
                </div>
              </ScrollAnimation>
            </Grid>
          </Grid>

          <Modal open={popupState} onClose={()=>handlePopup()} className="Modal" tabIndex={-1}>
              <Paper elevation={0} className="paper">
                <div className="ModalTitle">{popupText}</div>
                <div className="kiskor1 cl">{subTexts[0]}</div>
                <div className="kiskor2 cl">{subTexts[1]}</div>
                <div className="kiskor3 cl">{subTexts[2]}</div>
                <div className="kiskor4 cl">{subTexts[3]}</div>
              </Paper>
          </Modal>


        </Grid>
        <Grid item xs={1} md={3}></Grid>
      </Grid>
    </div>
    </>
  );
}

export default App;
