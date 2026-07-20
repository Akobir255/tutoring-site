import Hero from '../components/Hero.jsx'
import Subjects from '../components/Subjects.jsx'
import Approach from '../components/Approach.jsx'
import AboutTutor from '../components/AboutTutor.jsx'
import Booking from '../components/Booking.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTutor />
      <Subjects />
      <Approach />
      {/* Testimonials hidden until real quotes are added — restore by re-importing the component */}
      <Booking />
    </>
  )
}
