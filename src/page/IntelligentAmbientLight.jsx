import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'

const IntelligentAmbientLightInstallation = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.IntelligentAmbientLightInstallation}/>
      <ServiceSection data={serviceWorkflowData.IntelligentAmbientLightInstallation}/>
      <GalleryCarousel data={Gallery.IntelligentAmbientLightInstallation} />
    </div>
  )
}

export default IntelligentAmbientLightInstallation;
