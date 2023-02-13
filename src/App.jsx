import { Background } from "./styled";
import SolarSyn from "../src/assets/SolarSyn.svg";
import citys from "../src/assets/cityes.svg";

import center from "../src/assets/center.png"
import side from "../src/assets/side.png"
import MountainsSilhouette from "../src/assets/MountainsSilhouette.svg";


function App() {

  return (
    <Background>
      <img className="sun"src={SolarSyn}/>
      <div className="grid"></div>

      <div className="montainBackgroundImage">

        <img className="sideLeft" src={side} />
        <img className="center" src={center} />
        <img className="sideRight" src={side} />


      </div>

    </Background>
  )
}

export default App
