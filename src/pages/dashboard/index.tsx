import { Avatar, Container, Grid } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import ClientFavorites from "../../components/general/DashboardCards/ClientFavorites";
import TherapistCertificates from "../../components/general/DashboardCards/TherapistCertificates";
import PaymentStatus from "../../components/general/PaymentStatus";
import TherapistCard from "../../components/general/ProfileCard/TherapistCard";
import UserCard from "../../components/general/ProfileCard/UserCard";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import { Box } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { FlexBox } from "../../styles/components/FlexBox";
import { Subtitle } from "../../styles/components/Typography";
import {
  AppointmentList,
  DashboardContent,
  PendingAppointment,
} from "../../styles/pages/dashboard/Dashboard";

const Dashboard = () => {
  const userType: string = "client";
  const array = [1, 1];

  //marcar isso como false pra ver variação do box de pending requests
  const isPending = false;
  return (
    <DashboardWrapper
      title={userType === "client" ? "Área do cliente" : "Área do ThetaHealer"}
    >
      <DashboardContent>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  {userType === "client" ? (
                    <ClientFavorites />
                  ) : (
                    <TherapistCertificates />
                  )}
                </Grid>
                <Grid item md={6}>
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
                {userType === "client" && (
                  <Grid item xs={12}>
                    <PendingAppointment>
                      <Subtitle color={"white"}>
                        {isPending
                          ? "Finalize seu agendamento agora mesmo!"
                          : "Busque profissionais e faça sua consulta agora!"}
                      </Subtitle>
                      {isPending ? (
                        <>
                          <FlexBox>
                            <Avatar
                              src="/media/thera.png"
                              className="avatar-therapist"
                            />{" "}
                            <p> Matheus Rabelo</p>
                            <span>•</span>
                            <p>ThetaHealer Certificado</p>
                          </FlexBox>
                          <FlexBox>
                            <p>
                              <img
                                src="/media/icons/calendar.svg"
                                alt="calendar"
                              />{" "}
                              12 de outubro de 2020
                            </p>
                            <span>•</span>
                            <p>
                              <img src="/media/icons/time.svg" alt="time" />{" "}
                              {`09:00 - horário de Brasília`}
                            </p>
                          </FlexBox>
                          <ThetaButton
                            theme="rainbow"
                            style={{ alignSelf: "baseline" }}
                          >
                            Pagar agora
                          </ThetaButton>
                        </>
                      ) : (
                        <Link passHref href="/busca-profissionais">
                          <ThetaButton
                            theme="rainbow"
                            style={{ alignSelf: "baseline" }}
                          >
                            Buscar Profissionais
                          </ThetaButton>
                        </Link>
                      )}
                    </PendingAppointment>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Box
                style={{
                  height: userType === "client" ? "auto" : "270px",
                  maxHeight: userType === "client" ? "505px" : "270px",
                }}
              >
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
