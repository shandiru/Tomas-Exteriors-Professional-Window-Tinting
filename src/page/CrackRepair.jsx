import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const CrackRepair = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.CrackRepair}/>
      <ServiceSection data={serviceWorkflowData.HeadlightCrackRepair}/>
       <GalleryCarousel data={Gallery.HeadlightCrackRepair} />
    </div>
  )
}

export default CrackRepair;
