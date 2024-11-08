import "./styles/backgrounds.css"
import "./styles/overlay.css"
import { MappedData } from './componets/MappedData'
import { Header } from './componets/Header'
import { About } from './componets/About'
import { useState } from 'react';
import { CustomOverlay } from "./componets/CustomOverlay";


function App() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <div className="topNavBar">
        <img
          className="burgermenu"
          src="bag-x.svg"
          width="50px"
          onClick={toggleOverlay}
        />
      </div>
      <div className="background">
        <Header />
        <CustomOverlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        <MappedData />
        <About />
      </div>

    </>
  );
}

export default App;