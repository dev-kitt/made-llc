import "./App.css"
import Navbar from './components/navbar/Navbar'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import CardMain from './components/cardMade/CardMain'
import About from './components/about/About'
import Services from './components/services/Services'
import Collections from './components/collections/Collections'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useContext, useState } from "react"
import { themeContext } from "./Context"

function App() {
  const [accounts, setAccounts] = useState([])
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "var(--color-neon)" : "",
      }}
    > 
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Nav />
      <CardMain />
      <Header accounts={accounts} setAccounts={setAccounts} />
      <About />
      <Services />
      <Collections />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
