import React from 'react'
import { InfoDeskCard } from './InfoDeskCard';

export const InfoDesk = () => {

  return (
    <div className='info-desk-content'>
        <span className='info-desk-header'>Information Desk</span>
        <div style={{height: "1px", backgroundColor: 'blue', marginBottom: "10px", }}></div>
        <div className='info-desk-card-continer'>
          <InfoDeskCard title="ADMISSION" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/admission.png"}/>
          <InfoDeskCard title="DEPARTMENTS" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/faculty.png"} />
          <InfoDeskCard title="RESEARCH" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/research.png"}/>
          <InfoDeskCard title="LIBRARY" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/libraray.png"}/>
          <InfoDeskCard title="STUDENT CORNER" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/academic.png"}/>
          <InfoDeskCard title="E-TENDER" src={"https://www.iiitp.ac.in/sites/default/files/inline-images/tender.png"}/>
        </div>
    </div>
  )
}
