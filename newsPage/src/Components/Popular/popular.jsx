import React from 'react'
import PopularSections from './PopularSections'
import firstImage from './image-retro-pcs.jpg'
import secondImage from './image-top-laptops.jpg'
import thirdImage from './image-gaming-growth.jpg'


const Popular = () => {
  return (
    <div className='md:gird md:grid-cols-3'>
      <PopularSections imgLink={firstImage} rank="01" topic='Reviewing Retro PCs' content='What happens when old PCs given modern upgrades' />
      <PopularSections imgLink={secondImage} rank="02" topic='Top 10 laptops of 2023' content='What happens when old PCs given modern upgrades CSS version, your configuration, and' />
      <PopularSections imgLink={thirdImage} rank="03" topic='The growth of gaming' content='What happens when old PCs given modern upgrades there might be an issue ' marginButton='pb-11' />
    </div>
  )
}

export default Popular
