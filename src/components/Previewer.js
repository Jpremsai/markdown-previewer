import React from 'react'

function Previewer({value, getMarkDown}) {
  
  return (
    <div id="preview" dangerouslySetInnerHTML = {getMarkDown(value)}>
    </div>
  )
}

export default Previewer