import React from 'react'
import Chatter from '../Projects/Chatter'
import Countries from '../Projects/Countries'
import EasyBuy from '../Projects/EasyBuy'
import Instagram from '../Projects/Instagram'
import Movies from '../Projects/Movies'
import Trekkar from '../Projects/Trekkar'

const Projects = () => {
  return (
    <div className="right pt-5" id = "projects">
      <EasyBuy />
      <Movies />
      <Instagram />
      <Chatter />
      <Countries />
      <Trekkar />
    </div>
  )
}

export default Projects