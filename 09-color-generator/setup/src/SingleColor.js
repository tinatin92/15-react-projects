import React, { useState, useEffect } from 'react'
/* import rgbToHex from './utils' */

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
  const timeout =   setTimeout(() => {
    setAlert(false)
  }, 3000)
  return () => clearTimeout(timeout)
  }, [alert])
  const bcg = rgb.join(',')
  /* const hex = rgbToHex(...rgb) */
  const hexValue = `#${hexColor}`
  console.log(hexColor);
   
  function handleCopyColor () {
   setAlert(true);
   navigator.clipboard.writeText(hexValue)
  }

  return (
   <article onClick={handleCopyColor} className={`color ${index > 9 && 'color-light'}`} style={{backgroundColor : `rgb(${bcg})`}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alert && <p className='alert'>Copied to clipboard</p>}

   </article>
  )
}

export default SingleColor
