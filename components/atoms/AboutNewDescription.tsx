import React from 'react'

interface Props {
    text: string
}

const AboutNewDescription = ({ text }: Props) => {
  return (
    <p>{text}</p>
  )
}

export default AboutNewDescription