import React from 'react'

import './ErrorIndicator.scss'

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <span>Упс!</span>
      <span>Что-то пошло не так</span>
      <span>Попробуй написать фамилию еще раз</span>
    </div>
  )
}

export default ErrorIndicator
