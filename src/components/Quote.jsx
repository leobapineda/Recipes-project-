import React from 'react'
import "../stylesheet/Quote.css"

function Quote({text}) {
  return (
    <h4 className='quote' >
      {text}
    </h4>
  )
}

export default Quote
