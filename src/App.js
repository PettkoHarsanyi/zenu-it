import { Dialog, DialogTitle, DialogContent, Paper, Typography, Modal, DialogContentText, TextField, Grid, DialogActions, Button } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const [isOpen, setOpen] = useState(false);

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

  const handleInput = (type) => (e) => {
    if(type==="name"){
      setName(e.target.value);
    }else{
      setEmail(e.target.value);
    }
  }

  const handleOpen = () =>{
    setOpen(!isOpen);
  }

  return (
    <>
    <div className="App">
      <div className="bg-g1 size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1">
        <span></span>
        <div className="flex-col-c p-t-50 p-b-50">
          <h3 className="l1-txt1 txt-center p-b-10">
            Hamarosan jövünk!
          </h3>

          <p className="txt-center l1-txt2 p-b-60">
            Weboldalunk jelenleg fejlesztés alatt áll!
          </p>

          <div className="flex-w flex-c cd100 p-b-82">
            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt3 p-b-9 days">{timerDays}</span>
              <span className="s1-txt1">Nap</span>
            </div>

            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt3 p-b-9 hours">{timerHours}</span>
              <span className="s1-txt1">Óra</span>
            </div>

            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt3 p-b-9 minutes">{timerMinutes}</span>
              <span className="s1-txt1">Perc</span>
            </div>

            <div className="flex-col-c-m size2 how-countdown">
              <span className="l1-txt3 p-b-9 seconds">{timerSeconds}</span>
              <span className="s1-txt1">Másodperc</span>
            </div>
          </div>

          <button className="flex-c-m s1-txt2 size3 how-btn"  data-toggle="modal" data-target="#subscribe" onClick={handleOpen}>
            Kövess minket a legújabb hírekért!
          </button>
        </div>
      </div>

      <Dialog open={isOpen} fullWidth={true} onClose={handleOpen} justify="center" style={{textAlign:"center"}}>
        <DialogTitle id="form-dialog-title" style={{marginTop:"5vh"}}>
          <Typography style={{fontFamily: "Montserrat-Bold", fontSize:"5vh"}}>Feliratkozás</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontFamily: "Montserrat-Regular"}}>
            IRATKOZZ FEL AZ ÚJDONSÁGOKÉRT!
          </DialogContentText>
          <input value={name} placeholder="Név" onChange={handleInput("name")} style={{border:"0.2vh solid gray", borderRadius:"2vh", padding:"1vh 1vh 1vh 3vh", marginTop:"5vh", width:"50%", marginLeft:"auto", marginRight:"auto",fontFamily: "Montserrat-Bold", color:"gray"}}></input>
          <input value={email} placeholder="Email" onChange={handleInput("email")} style={{border:"0.2vh solid gray", borderRadius:"2vh", padding:"1vh 1vh 1vh 3vh", marginTop:"5vh", width:"50%", marginLeft:"auto", marginRight:"auto", fontFamily: "Montserrat-Bold",color:"gray"}}></input>
        </DialogContent>
        <Button onClick={()=>{console.log(email, name)}} style={{width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"5vh", marginBottom:"5vh", padding:"2vh", backgroundColor:"#4A02FE", color:"white", borderRadius:"2vh", fontSize:"2vh"}}>
          Feliratkozom
        </Button>
        <DialogContentText style={{fontFamily: "Montserrat-Regular", marginBottom:"15vh"}}>
            Amint kész lesz a weblapunk, rögtön értesítünk róla. <br />Nyugi, nem fogunk zaklatni!
          </DialogContentText>
      </Dialog>      
    </div>
    </>
  );
}

export default App;
