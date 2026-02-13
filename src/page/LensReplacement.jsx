import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import DualTransformation from '../Common/MultiSetGallery'

const LensReplacement = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.LensReplacement}/>
      <ServiceSection data={serviceWorkflowData.HeadlightLensReplacement}/>
      <DualTransformation />
    </div>
  )
}

export default LensReplacement;
