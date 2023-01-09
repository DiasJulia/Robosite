import React from 'react'
import {Card} from './styles'

type CardProps = {
    backgroundImage: string
}

const MemberCard: React.FC<CardProps> = ({backgroundImage}) => {
  return (
    <Card backgroundImage={backgroundImage}></Card>
  )
}

export default MemberCard