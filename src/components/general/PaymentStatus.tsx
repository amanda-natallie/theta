import React from 'react'
import styled from "styled-components"

const Small = styled.small`
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
      case "Pago":
        return "paid"
        
      case "Pagamento Pendente": 
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
