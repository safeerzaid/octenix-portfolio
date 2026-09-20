import './index.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Strategy from './components/Strategy'
import About    from './components/About'
import Work     from './components/Work'
import Services from './components/Services'
import FAQ      from './components/FAQ'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import SmoothScroller from './components/SmoothScroller'

export default function App() {
  return (
    <SmoothScroller>
      <Navbar />
      <Hero />
      <Strategy />
      <Services />
      <Work />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </SmoothScroller>
  )
}
