import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import MultiGallery from '../Common/MultiGallery'

const InteriorTrimsRestoration = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.InteriorTrimsRestoration}/>
      <ServiceSection data={serviceWorkflowData.InteriorTrimsRestoration}/>
      <MultiGallery data={Gallery.InteriorTrimsRestoration[0]} />
    </div>
  )
}

export default InteriorTrimsRestoration;
