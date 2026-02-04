import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
const WindowTint = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.windowTinting}/>
      <ServiceSection data={serviceWorkflowData.windowTinting}/>
    </div>
  )
}

export default WindowTint;
