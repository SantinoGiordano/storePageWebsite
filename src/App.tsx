import './styles/backgrounds.css'
import { MappedData } from './componets/MappedData'
import { Header } from './componets/Header'
import { About } from './componets/About'

function App() {

  return (
    <>
    <div className='topNavBar'>
    
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
