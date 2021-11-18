import React from 'react'
import { CFooter } from '@coreui/react'
const Footer = () => {

  return ( 
    <CFooter fixed={false}>
    <div>
      <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">AdMetrics Dashboard</a>
      <span className="ml-1">&copy; 2021 AdMetrics.</span>
    </div>
    <div className="mfs-auto">
      <span className="mr-1">Powered by</span>
      <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">AdMetrics</a>
    </div>
  </CFooter>
  )
}

export default Footer;