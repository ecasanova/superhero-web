import React from 'react'

import './RadioButtonStyles.scss'

export const RadioButton = ({ label, value, onChange }) => {
  return (
    <div className='radio-button-container'>
      <input className='radio-button' type='checkbox' onChange={onChange} checked={value} name='remember-me' value='remember-me' />
      <label className='radio-button-label' htmlFor='remember-me'>{label}</label>
    </div>
  )
}