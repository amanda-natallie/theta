import React from 'react'
import styled from "styled-components"

const Small = styled.small`
  text-align: right;
  &.paid { color: green}
  &.pending { color: orange}
  &.cancelled { color: red}
`

interface Iprops {
  status: string
}

const PaymentStatus = ({status}: Iprops) => {

  const getClassName = () => {
    switch (status) {
      case "Aguardando Confirmação":
        return "paid"
        
      case "Aguardando Pagamento": 
      return "pending"
    
      case "Cancelado": 
      return "cancelled"
    
      default:
        break;
    }
  }
  return (
  <Small className={getClassName()}>{status}</Small>
  )
}

export default PaymentStatus
