import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const InteriorTrimsRestoration = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.InteriorTrimsRestoration}/>
      <ServiceSection data={serviceWorkflowData.InteriorTrimsRestoration}/>
      <GalleryCarousel data={Gallery.InteriorTrimsRestoration} />
    </div>
  )
}

export default InteriorTrimsRestoration;
