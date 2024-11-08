import './styles/backgrounds.css'
import { MappedData } from './componets/MappedData'
import { Header } from './componets/Header'
import { About } from './componets/About'
function App() {

  return (
    <>
  
    <div className='topNavBar'>
    <img className='burgermenu' src='bag-x.svg' width={"50px"}/>
    </div>
    <div className='background'>
    <Header/>
    <MappedData />
    <About/>
    </div>
    </>
  )
}

export default App
