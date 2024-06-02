
import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import { NewsProvider } from "./context/news/NewsContext"

const App = () => {
  return (
    <div>
    
    <NewsProvider>
    <Navbar/>

<Home/>
    </NewsProvider>

   
    </div>
  )
}

export default App
