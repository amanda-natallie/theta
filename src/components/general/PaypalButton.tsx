import React, { useRef, useEffect, SetStateAction, Dispatch} from "react";
import { appointmentUpdateStatus } from "../../services/appointments";

interface PaypalButtonProps {
  appointmentId: string,
  ammount: string,
  setShowDialog: any,
}

const PaypalButton = ({appointmentId, ammount, setShowDialog}: PaypalButtonProps) => {
  const paypal = useRef();

  useEffect(() => {
    (window as any).paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Sessão Thetahealing Online",
              amount: {
                currency: "BRL",
                value: parseFloat(ammount).toFixed(2)
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        await appointmentUpdateStatus(appointmentId, "Aguardando Confirmação", data.orderID)
        setShowDialog(false)
        window.location.href = "/dashboard";
      },
      onError: (error) => {
        console.log(error)
      }
    }).render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PaypalButton;