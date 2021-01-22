import React from 'react'

export default function CheckCircle({color, viewport}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color} style={viewport === 'desktop' ? {width: '23px', height: '23px'} : {width: '12px', height: '12px'}}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}