import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface OfferTabProps {
  image: StaticImageData;
  title: string;
}

const OfferTab = ( { image, title }: OfferTabProps) => {
  return (
    <div className='flex-1'>
        <Image src={image} alt='engine'   />
        <h3>{title}</h3>
        <p>Acccordeon</p>
    </div>
  )
}

export default OfferTab