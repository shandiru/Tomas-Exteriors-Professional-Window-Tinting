import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import MultiGallery from '../Common/MultiGallery'
import DualTransformation from '../Common/MultiSetGallery'

const CondensationRepair = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.CondensationRepair}/>
      <ServiceSection data={serviceWorkflowData.HeadlightCondensationRepair}/>
      <DualTransformation data={Gallery.lense} />
    </div>
  )
}

export default CondensationRepair;
