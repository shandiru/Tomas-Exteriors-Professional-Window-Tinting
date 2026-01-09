import React from 'react'
import AboutHero from '../components/AboutPage.jsx/AboutHero'
import TimelineSection from '../components/AboutPage.jsx/TimeLineSection'
import CoreValues from '../components/AboutPage.jsx/Value'
import MissionVision from '../components/AboutPage.jsx/Mission'
import Careers from '../components/AboutPage.jsx/Careers'

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
