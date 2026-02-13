import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const CondensationRepair = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.CondensationRepair}/>
      <ServiceSection data={serviceWorkflowData.HeadlightCondensationRepair}/>
      <GalleryCarousel data={Gallery.CondensationRepair} />
    </div>
  )
}

export default CondensationRepair;
