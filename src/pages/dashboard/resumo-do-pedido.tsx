import React from "react";
import ClientTherapistAvatar from "../../components/general/ClientTherapistAvatar";
import CalendarSvgIcon from "../../components/icons/CalendarSvgIcon";
import CalendarV2SvgIcon from "../../components/icons/CalendarV2SvgIcon";

import DashboardWrapper from "../../components/layout/DashboardWrapper";
import { colors } from "../../styles/colors";
import { Box } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { Divider } from "../../styles/components/Divider";
import { FlexBox } from "../../styles/components/FlexBox";
import { Subtitle } from "../../styles/components/Typography";
import { Checkout } from "../../styles/pages/dashboard/Checkout";
import { PriceBlock } from "../../styles/pages/Home";
import theme from "../../styles/theme";

const Dashboard = () => {
  return (
    <DashboardWrapper
      title="Agendamento:  Resumo e Pagamento"
      breadcrumbs="Resumo do Pedido"
    >
      <Checkout>
        <ClientTherapistAvatar
          therapist="/media/profile/thera.png"
          client=""
          size="90"
        />

        <Box className="checkout-box">
          <Subtitle color={theme.palette.primary.main}>
            Sua consulta online com <span>Davi Lucas</span>{" "}
          </Subtitle>
          <FlexBox>
            <p>
              <img src="/media/icons/calendar.svg" alt="calendar" /> 21 de
              Setembro de 2020
            </p>
            <span>•</span>
            <p>
              <img src="/media/icons/time.svg" alt="time" /> 09:00 - horário de
              Brasília
            </p>
          </FlexBox>
          <Divider height="10px" />
          <Subtitle color={colors.gray50}>
            Total a pagar: <strong> R$107,00 </strong>
          </Subtitle>

          <Divider height="30px" />
          <ThetaButton fullWidth theme="purple">
            EFETUAR PAGAMENTO
          </ThetaButton>
          {/* ^ redireciona pro paypal daqui */}
        </Box>
      </Checkout>
    </DashboardWrapper>
  );
};

export default Dashboard;
