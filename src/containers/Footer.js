import React from 'react'
import { CFooter } from '@coreui/react'
const Footer = () => {

  return ( 
    <CFooter fixed={false} style={{backgroundColor:"white",marginTop:4}}>
    <div> 
      <a href="https://admetrics.in/" target="_blank" rel="noopener noreferrer">AdMetrics</a>
      <span className="ml-1">&copy; 2021</span>
    </div>
    <div className="mfs-auto">
      <span className="mr-1">Powered by</span>
      <a href="https://tibilsolutions.com/" target="_blank" rel="noopener noreferrer">Tibil Solutions</a>
    </div>
  </CFooter>
  )
}

export default Footer;