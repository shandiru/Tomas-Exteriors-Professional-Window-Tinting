import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const Restoration = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.Restoration}/>
      <ServiceSection data={serviceWorkflowData.HeadlightRestoration}/>
      <GalleryCarousel data={Gallery.HeadlightRestoration} />
    </div>
  )
}

export default Restoration;
