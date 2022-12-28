import React from 'react'
import pillsIcon from '../../assets/pills-solid.svg'

const MedsSvg = ({ className, height, width, color }) => {
  return (
    <img
      className={className}
      src={pillsIcon} 
      alt='Pills icon' 
      height={height} 
      width={width} />
  )
}

export default MedsSvg