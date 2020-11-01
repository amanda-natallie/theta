import { Avatar, Container, Grid } from "@material-ui/core";
import React from "react";
import ComingSoon from "../../components/general/ComingSoon/ComingSoon";
import ClientFavorites from "../../components/general/DashboardCards/ClientFavorites";
import TherapistCertificates from "../../components/general/DashboardCards/TherapistCertificates";
import PaymentStatus from "../../components/general/PaymentStatus";
import TherapistCard from "../../components/general/ProfileCard/TherapistCard";
import UserCard from "../../components/general/ProfileCard/UserCard";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import { Box } from "../../styles/components/Box";
import { FlexBox } from "../../styles/components/FlexBox";
import { Subtitle } from "../../styles/components/Typography";
import {
  AppointmentList,
  DashboardContent,
} from "../../styles/pages/dashboard/Dashboard";
import { ProfileBlock } from "../../styles/pages/ProfileProfessional";
import theme from "../../styles/theme";

const Dashboard = () => {
  const userType: string = "client";
  const array = [1,1,1,1,1,1,1,1,1]
  return (
    <DashboardWrapper
      title={userType === "client" ? "Área do cliente" : "Área do ThetaHealer"}
    >
      <DashboardContent>
          <Container maxWidth="lg">
          <Grid container spacing={2}>
          <Grid item md={4}>
            {userType === "client" ? (
              <ClientFavorites />
            ) : (
              <TherapistCertificates />
            )}
          </Grid>
          <Grid item md={4}>
            <Box className="profile" justify="center">
              <Avatar
                src="/media/profile/thera.png"
                alt="uai"
                className="profile-avatar"
              />
              <h2>Davi Lucas</h2>
              <p>davi.luscas@gmail.com</p>

              {userType === "client" ? <UserCard /> : <TherapistCard />}
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box>
              <h2>Agendamentos</h2>

              <AppointmentList>
                {array.map((_: any, index: number) => (
                  <li key={index}>
                    <FlexBox justify="space-between">
                      <h5>John Doe</h5>
                      <p className="time">
                        <img src="/media/icons/time.svg" alt="time" /> 09:00
                      </p>
                      <PaymentStatus status="Pago" />
                    </FlexBox>
                    <p>Faltam 2 dias e 1:53 min</p>
                  </li>
                ))}
              </AppointmentList>
            </Box>
          </Grid>
        </Grid>
     
          </Container>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
