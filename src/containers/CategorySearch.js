import React from 'react';
import { Link } from 'react-router-dom';
import {
    CCol,
    CFormGroup,
    CInputRadio,
    CLabel,
    CSelect,
    CRow
} from '@coreui/react';

const CategorySearch = () => {

  const onRadioCategory = () => {
   console.log(123)
  }
    return (

        
       <div>
            {/* <CRow>

<CCol xs="4">
    <CFormGroup>
        <CCol md="12">
         
        </CCol>
        <CCol md="12">
            <CFormGroup variant="checkbox">
                <Link to="/dashboard/departmentview">
                    <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" onChange={onRadioCategory} />
                    <CLabel variant="checkbox" htmlFor="radio1">Department View</CLabel>
                </Link>

            </CFormGroup>
         
            <CFormGroup variant="checkbox">
                <Link to="/dashboard/patient">
                    <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" checked onChange={onRadioCategory} />
                    <CLabel variant="checkbox" htmlFor="radio2">Patient View</CLabel>
                </Link>
            </CFormGroup>
        </CCol>
    </CFormGroup>
</CCol>

<CCol xs="4">
    <CFormGroup>
        <CCol md="12">
         
        </CCol>
        <CCol md="12">
            <CFormGroup variant="checkbox">
                <Link to="/dashboard/departmentviewTwo">
                    <CInputRadio className="form-check-input" id="radio3" name="radios" value="option1" onChange={onRadioCategory} />
                    <CLabel variant="checkbox" htmlFor="radio3">Department View Two</CLabel>
                </Link>

            </CFormGroup>
         
         
        </CCol>
    </CFormGroup>
</CCol>

</CRow> */}
<CRow>

<div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
    <CFormGroup >
        {/* <CLabel htmlFor="hosipital">Select Group</CLabel> */}
        <CSelect custom name="Hgroup" id="Hgroup">
            <option value="1">Hospital Group</option>
            <option value="2">Customer Group</option>
            <option value="3">Dashboard</option>

        </CSelect>
    </CFormGroup>
</div>
<div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
    <CFormGroup>
        {/* <CLabel htmlFor="ccyear">Select</CLabel> */}
        <CSelect custom name="ccyear" id="ccyear">
            <option>Hospital</option>
            <option>Call Center</option>

        </CSelect>
    </CFormGroup>

</div>


<div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
    <CFormGroup>
        {/* <CLabel htmlFor="ccyear">Id</CLabel> */}
        <CSelect custom name="ccyear" id="ccyear">
            <option>Patient ID</option>
            <option>123456</option>

        </CSelect>
    </CFormGroup>

</div>
</CRow>
       </div>

    )
}

export default CategorySearch;