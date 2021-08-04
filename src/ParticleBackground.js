import Particles from "react-particles-js";
import particlesConfig from "./config/particles-config";

export default function ParticleBackground(){
  return(
    <Particles params={particlesConfig} className="ParticleBg" ></Particles>
  )
}