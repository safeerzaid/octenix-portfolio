import React, { Suspense } from 'react'
import './index.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import SmoothScroller from './components/SmoothScroller'

const Strategy = React.lazy(() => import('./components/Strategy'))
const About    = React.lazy(() => import('./components/About'))
const Work     = React.lazy(() => import('./components/Work'))
const Services = React.lazy(() => import('./components/Services'))
const FAQ      = React.lazy(() => import('./components/FAQ'))
const Contact  = React.lazy(() => import('./components/Contact'))
const Footer   = React.lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <SmoothScroller>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="w-full h-screen bg-[#050505]"></div>}>
        <Strategy />
        <Services />
        <Work />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </SmoothScroller>
  )
}
