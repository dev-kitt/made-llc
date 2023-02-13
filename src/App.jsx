import "./App.css"
import Navbar from './components/navbar/Navbar'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import CardMain from './components/cardMade/CardMain'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useContext } from "react"
import { themeContext } from "./Context"

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#EEE8FF" : "",
        color: darkMode ? "var(--color-black)" : "",
      }}
    > 
      <Navbar />
      <Nav />
      <CardMain />
      <Header />
      <About />
      <Projects />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
