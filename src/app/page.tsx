import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
