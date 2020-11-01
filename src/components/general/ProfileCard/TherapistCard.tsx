import React from 'react'
import { InfoCards } from '../../../styles/components/ProfileCards'

const TherapistCard = () => {
  return (
   <InfoCards>
     <li><p>Nº de Consultas</p> <span>4</span></li>
     <li><p>Tempo Total</p> <span>157 <small>m</small> </span></li>
     <li><p>Doações</p> <span>0</span></li>
   </InfoCards>
  )
}

export default TherapistCard
