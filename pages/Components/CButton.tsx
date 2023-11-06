import React from 'react'
import { Button } from 'react-bootstrap'

function CButton({ name, url }: { name: String, url: string }) {
  return (
    <a className="button techbadge" href={url} target= "_blank" >
      {name}
    </a>
  )
}

export default CButton