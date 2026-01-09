import React from 'react'
import AboutHero from '../components/AboutPage/AboutHero'
import TimelineSection from '../components/AboutPage/TimeLineSection'
import CoreValues from '../components/AboutPage/Value'
import MissionVision from '../components/AboutPage/Mission'
import Careers from '../components/AboutPage/Careers'

const About = () => {
  return (
    <div>
      <AboutHero />
      <TimelineSection />
      <CoreValues />
      <MissionVision />
      <Careers />
    </div>
  )
}

export default About
