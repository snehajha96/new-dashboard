import React from 'react';
import logo from '../assets/images/logo.png';
import logoMinimize from '../assets/images/logoMinimize.png'
import CIcon from '@coreui/icons-react';
import { useSelector, useDispatch } from 'react-redux'

import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
    CImg,
    CContainer,
    CRow,
    CCol
  } from '@coreui/react'

  // sidebar nav config
import UserSideMenu from './UserSidemenu' 

const UserSidenav = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  return ( 
    <CSidebar show={show}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}>
    <CSidebarBrand className="col-sm-12" to="/Dashboard/Dashboard1">
      {/* <CIcon
        className="c-sidebar-brand-full"
        name="logo-negative"
        height={35}
      /> */}
       <CImg
      src={logo}
      fluid
      className="mb-2 c-sidebar-brand-full rounded "
      width={170}
      height={35}
      
    />

    <CImg
      src={logoMinimize}
      fluid
      className="mb-2 c-sidebar-brand-minimized "
      width={35}
      height={35}
    />
      {/* <CIcon
        className="c-sidebar-brand-minimized"
        name="sygnet"
        height={35}
        
      />  */}
      {/* <img src={logo} alt="logo" className="p-2 w-75 h-100 sm-d-none"/> */}
    </CSidebarBrand>
    {/* <CContainer className="sideNavuserLogo pl-4 ">
      <CRow >
      <CCol className="userImg align-center" >
        <CImg src="https://image.flaticon.com/icons/png/128/2922/2922506.png" alt="user logo" width={32} height={32}/>
      </CCol>
      <CCol className="userName col-9">
        <span>Alexander Pierce</span>
      </CCol>
      </CRow>
    </CContainer> */}

    <div className="sideNavuserLogo">
     
      <div className="userImg" >
        <CImg src="https://image.flaticon.com/icons/png/128/2922/2922506.png" alt="user logo" width={32} height={32}/>
      </div>
      <div className="userName ml-2">
        <span>Pradeep</span>
      </div>
     
    </div>
    <CSidebarNav>

      <CCreateElement
        items={UserSideMenu}
        components={{
          CSidebarNavDivider,
          CSidebarNavDropdown,
          CSidebarNavItem,
          CSidebarNavTitle
        }}
      />
    </CSidebarNav>
    <CSidebarMinimizer className="c-d-md-down-none"/>
  </CSidebar>
  )
}

export default UserSidenav;