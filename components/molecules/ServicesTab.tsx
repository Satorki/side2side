import Image from 'next/image'
import React from 'react'
import Engine from '../../public/images/services3.jpg'

const ServicesTab = () => {
  return (
    <div>
        <Image src={Engine} alt='engine'  />
        <h3>Naprawy silników</h3>
        <p>Acccordeon</p>
    </div>
  )
}

export default ServicesTab