import React from 'react'

const StrongText = (props) => {
  return (
    <strong className='strongText' {...props}>{props.children}</strong>
  )
}

export default StrongText