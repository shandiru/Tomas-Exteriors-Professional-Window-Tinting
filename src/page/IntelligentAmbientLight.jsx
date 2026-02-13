import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import MultiGallery from '../Common/MultiGallery'

const IntelligentAmbientLightInstallation = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.IntelligentAmbientLightInstallation}/>
      <ServiceSection data={serviceWorkflowData.IntelligentAmbientLightInstallation}/>
      <MultiGallery data={Gallery.IntelligentAmbientLightInstallation[0]} />
    </div>
  )
}

export default IntelligentAmbientLightInstallation;
