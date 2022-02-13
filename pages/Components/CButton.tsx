import React from 'react'
import { Button } from 'react-bootstrap'

function CButton({ name, url }: { name: String, url: any }) {
  return (
    <a className="button" href={url} target= "_blank" >
      {name}
    </a>
  )
}

export default CButton