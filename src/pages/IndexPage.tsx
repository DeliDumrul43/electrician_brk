import Hero from '../sections/Hero'
import Services from '../sections/Services'
import About from '../sections/About'
import Gallery from '../sections/Gallery'
import Contact from '../sections/Contact'

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}