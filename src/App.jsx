import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import './styles/index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen grid grid-rows-[auto,1fr]">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </Router>
  )
}

export default App