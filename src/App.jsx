import { Background } from "./styled";
import SolarSyn from "../src/assets/SolarSyn.svg";
import gridblack from "../src/assets/gridblack.svg";



function App() {

  return (
    <Background>
      <img className="sun"src={SolarSyn}/>
      <div className="grid"></div>
    </Background>
  )
}

export default App
