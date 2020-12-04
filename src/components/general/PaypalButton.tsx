import React, { useRef, useEffect, SetStateAction, Dispatch} from "react";
import { appointmentUpdateStatus } from "../../services/appointments";
import { ThetaButton } from "../../styles/components/Button";

interface PaypalButtonProps {
  appointmentId: string,
  ammount: string,
  setShowDialog: any,
  bankTransfer?: boolean
}

const PaypalButton = ({appointmentId, ammount, setShowDialog, bankTransfer}: PaypalButtonProps) => {
  const paypal = useRef();
  console.log("bankTransfer")
  console.log(bankTransfer)
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
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING"
      }
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

  const bankTransferPayment = async () => {
    alert("Efetuar um deposito bancário, enviaremos um e-mail assim que confirmado o pagamento:\n\nValor: R$107,00\nBanco: Itaú\nAgencia: 8967\nConta: 2334345-7\nCNPJ: 232.232342/0001-54");
    await appointmentUpdateStatus(appointmentId, "Aguardando Confirmação de Pagamento", "deposito_bancario")
    setShowDialog(false)
    window.location.href = "/dashboard";
  }

  return (
    <div>
      <div ref={paypal}></div>
      <ThetaButton
                theme="purple"
                style={{ alignSelf: "center" }}
                onClick={() => {bankTransfer ? bankTransferPayment() : alert("Opção apenas disponível com 3 dias deantecedencia")}}
              >
                Transferencia Bancária
              </ThetaButton>
    </div>
  );
};

export default PaypalButton;