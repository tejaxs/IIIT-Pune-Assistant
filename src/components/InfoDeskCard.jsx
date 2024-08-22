import React from 'react'

export const InfoDeskCard = ({title, src}) => {
  
  return (
    <div className='info-desk-card'>
      <div className='info-desk-img-container'>
        <img src={src} alt="#" className='info-desk-img'/>
      </div>
        <span className='info-desk-title'>{title}</span>
        
    </div>
  )
}
