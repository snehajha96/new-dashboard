import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

//  


const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Dashboard1 = React.lazy(() => import('./views/Dashboard/Dashboard1'));
const Forms = React.lazy(() => import('./containers/Forms'));
const Card = React.lazy(() => import('./containers/Card'))
const Accordion = React.lazy(() => import('./containers/accordion/accordion'));
const Map = React.lazy(() => import('./containers/map'));
const Table = React.lazy(() => import('./containers/Table/Table'));
const BreadCrum = React.lazy(() => import('./containers/breadCrum'));
const Charts = React.lazy(() => import('./containers/Charts'));
const Calender = React.lazy(() => import('./containers/Calender'));
const SignIn = React.lazy(() => import('./views/auth/login'));
const SignUp = React.lazy(() => import('./views/auth/signup'));

const routes = [
    { path: '/', exact: true, name: 'Home'},
    { path: '/dashboard', exact: true,  name: 'Dashboard', component: Dashboard },
    { path: '/dashboard/dashboard1',  name: 'Dashboard1', component: Dashboard1 },
    { path: '/dashboard/Forms', name: 'Forms', component: Forms},
    { path: '/dashboard/Card', name: 'Card', component: Card},
    { path: '/dashboard/map', name: 'Map', component: Map},
    { path: '/dashboard/Accordion', name: 'Accordion', component: Accordion},
    { path: '/dashboard/Table', name: 'Table', component: Table},
    { path: '/dashboard/BreadCrum', name: 'BreadCrum', component: BreadCrum},
    { path: '/dashboard/Charts', name: 'Chart', component: Charts},
    { path: '/dashboard/Calender', name: 'Calender', component: Calender},
    { path: '/dashboard/SignUp', name: 'SignUp', component: SignUp},
    { path: '/dashboard/SignIn', name: 'SignIn', component: SignIn}
]

export default routes;