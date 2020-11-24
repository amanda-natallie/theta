import React, { useRef, useEffect} from "react";

const PaypalButton = (setShowDialog: any) => {
  const paypal: any = useRef(null);

  useEffect(() => {
    paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Sessão Thetahealing Online",
              amount: {
                currency: "BRL",
                value: 107.00
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
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