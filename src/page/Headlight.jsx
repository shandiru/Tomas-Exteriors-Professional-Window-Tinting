import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const HeadlightServices = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.HeadlightServices}/>
      <ServiceSection data={serviceWorkflowData.ExteriorEnhancementServices}/>
      <GalleryCarousel data={Gallery.HeadlightServices} />
    </div>
  )
}

export default HeadlightServices;
