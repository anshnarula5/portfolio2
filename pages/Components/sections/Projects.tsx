import React from 'react'
import EasyBuy from '../Projects/EasyBuy'
import Instagram from '../Projects/Instagram'
import Movies from '../Projects/Movies'

const Projects = () => {
  return (
    <div className="right pt-5" id = "projects">
      <EasyBuy />
      <Movies />
      <Instagram />
    </div>
  )
}

export default Projects