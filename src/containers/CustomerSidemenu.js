import React from 'react';

const CustomerSideMenu =  [ 
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Dashboard',
      route: '/dashboard',
      icon: <i className="fas fa-tachometer-alt fa-lg mr-4"></i>,
      badge: {
        color: "info",
        text: "NEW",
      },
      _children: [
        {
          _tag: "CSidebarNavItem",
          name: "Dashboard1",
          to: "/dashboard/dashboard1",
          icon: <i className="far fa-circle fa-lg mr-4"></i>,
        },
      ],
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Menu']
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Customer Forms',
    //   to: '/dashboard/Forms',
    //   icon: <i className="fas fa-table fa-lg mr-4"></i>,
    // },
    {
      _tag: 'CSidebarNavItem',
      name: 'LinkedIn',
      to: '/dashboard/charts',
      icon: <i className="fas fa-chart-pie fa-lg mr-4"></i>
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Card',
    //   to: '/dashboard/Card',
    //   icon: <i class="fas fa-id-card fa-lg mr-4"></i>,
    // },{
    //   _tag: 'CSidebarNavItem',
    //   name: 'Map',
    //   to: '/dashboard/map',
    //   icon: <i class="fas fa-map-marker-alt fa-lg mr-4"></i>,
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: ' Accordion',
    //   to: '/dashboard/accordion',
    //   icon: <i class="far fa-address-book fa-lg mr-4"></i>,
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: ' Table',
    //   to: '/dashboard/Table',
    //   icon: <i className="fas fa-table fa-lg mr-4"></i>,
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'BreadCrum',
    //   to: '/dashboard/breadCrum',
    //   icon: <i class="fas fa-layer-group fa-lg mr-4"></i>,
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Calender',
    //   to: '/dashboard/Calender',
    //   icon: <i class="fas fa-calendar-week fa-lg mr-4"></i>,
    // },
  ]
  
  export default CustomerSideMenu;