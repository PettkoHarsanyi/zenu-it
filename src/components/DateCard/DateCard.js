export function DateCard({num, type}){
    return(
        <div style={{backgroundColor:"white", borderRadius:"3vh", color:"rgba(0,0,0,0.65)", width:"90px", minWidth:"90px", height: "90px", display: "flex", flexDirection:"column", margin:"3vh", justifyContent:"center", alignItems:"center"}}> 
            <p style={{fontFamily:"Montserrat-Bold", fontSize: "40px", margin:"0"}}>{num}</p>
            <p style={{fontFamily:"Montserrat-Regular", fontSize: "10px", margin:"0"}}>{type}</p>
        </div>
    )
}