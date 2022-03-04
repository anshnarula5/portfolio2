import React from 'react'
import { Button } from 'react-bootstrap'

function SButton({ name, url }: { name: String, url: any }) {
  return (
    <a className="button1" href={url} target= "_blank" >
      {name}
    </a>
  )
}

export default SButton