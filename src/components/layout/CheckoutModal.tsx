import { Dialog } from "@material-ui/core";
import React from "react";
import { colors } from "../../styles/colors";
import { Box } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { Divider } from "../../styles/components/Divider";
import { FlexBox } from "../../styles/components/FlexBox";
import { Subtitle } from "../../styles/components/Typography";
import { Checkout } from "../../styles/pages/dashboard/Checkout";
import theme from "../../styles/theme";
import ClientTherapistAvatar from "../general/ClientTherapistAvatar";
import {BarLoader} from "react-spinners"
import { getHour } from "../../utils/helpers";

interface Iprops {
  isOpen: boolean;
  onClose: Function;
  info?: infoProps;
  isLoading?: boolean
}

interface infoProps {
  providerName: string
  providerPic: string
  date: string
  time:string
  price: string 
  button: {
    title: string
    actionFunction: Function
}}

const CheckoutModal = ({ isOpen, onClose, isLoading = false, info }: Iprops) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      
    >
      <Checkout>
        <ClientTherapistAvatar
          therapist={info.providerPic}
          client=""
          size="90"
        />

        <Box className="checkout-box">
          <Subtitle color={theme.palette.primary.main}>
            Sua consulta online com <span>{info.providerName}</span>{" "}
          </Subtitle>
          <FlexBox>
            <p>
              <img src="/media/icons/calendar.svg" alt="calendar" /> {info.date}
            </p>
            <span>•</span>
            <p>
              <img src="/media/icons/time.svg" alt="time" /> {`${info.time} - horário de
              Brasília`}
            </p>
          </FlexBox>
          <Divider height="10px" />
          <Subtitle color={colors.gray50}>
              Total a pagar: <strong> {`R$${info.price}`}</strong>
          </Subtitle>

          <Divider height="30px" />
          <ThetaButton fullWidth theme="purple" onClick={() => info.button.actionFunction()}>
            {isLoading ? <BarLoader color="white"/> : info.button.title} 
          </ThetaButton>
          
        </Box>
      </Checkout>
    </Dialog>
  );
};

export default CheckoutModal;
