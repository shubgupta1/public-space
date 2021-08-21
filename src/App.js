import logo from './logo.svg';
import './App.css';
import ParticleAnimation from "react-particle-animation"
import ButtonAppBar from './components/AppBar';
import Button from "@material-ui/core/Button"
import nswgov from "./images/nswgov.jpg"
import SimpleTabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <ParticleAnimation
					numParticles={500}
					// background= white // #212121
					// color={{ r: 222, g: 222, b: 77, a: 255 }} // #DEDE3D
					particleSpeed={0.25}
					interactive={false}
					style={{
						position: "fixed",
						width: "100%",
						height: "100%",
						zIndex: "-1",
					}}
				/>
        {/* <img src = {nswgov} /> */}
      <ButtonAppBar />
        <SimpleTabs />
        <br />
        <br />
        <br />
        <Button variant="contained" color="primary">Analyse Data</Button>
    </div>
  );
}

export default App;
