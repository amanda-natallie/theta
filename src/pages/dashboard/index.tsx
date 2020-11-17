import { Avatar, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ClientFavorites from "../../components/general/DashboardCards/ClientFavorites";
import TherapistCertificates from "../../components/general/DashboardCards/TherapistCertificates";
import PaymentStatus from "../../components/general/PaymentStatus";
import TherapistCard from "../../components/general/ProfileCard/TherapistCard";
import UserCard from "../../components/general/ProfileCard/UserCard";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import { Box } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { FlexBox } from "../../styles/components/FlexBox";
import { Subtitle, Title } from "../../styles/components/Typography";
import {
  AppointmentList,
  DashboardContent,
  PendingAppointment,
} from "../../styles/pages/dashboard/Dashboard";
import Loading from "../../components/layout/Loading";
import { therapistAppointments } from "../../services/profissionals";
import { userAppointments } from "../../services/users";
import { renderDate } from "../../utils/helpers";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [user, setUser] = useState(undefined);

  const getInformation = async () => {
    const userInfo: any = localStorage.getItem("userInformation");
    const token: string = localStorage.getItem("authToken");
    setUser(JSON.parse(userInfo));
    setIsLoggedIn(token);

    user && setIsEmailConfirmed(user.confirmed_email);
    const response =
      userInfo.typeUser === "client"
        ? await userAppointments(token)
        : await therapistAppointments(token);
    setAppointments(response);
  };

  useEffect(() => {
    getInformation();
  }, []);

  //marcar isso como false pra ver variação do box de pending requests
  const isPending = false;

  return (
    <>
      {isLoggedIn && user ? (
        <DashboardWrapper
          title={
            user.typeUser === "client"
              ? "Área do cliente"
              : "Área do ThetaHealer"
          }
        >
          <DashboardContent>
            <Container maxWidth="lg">
              {user.confirmed_email ? (
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    {user.typeUser === "client" ? (
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
                      <h2>
                        {user.name} {user.lastName}
                      </h2>
                      <p>{user.email}</p>

                      {user.typeUser === "client" ? (
                        <UserCard />
                      ) : (
                        <TherapistCard />
                      )}
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box>
                      <h2>Agendamentos</h2>

                      <AppointmentList>
                        {appointments &&
                          appointments.map(
                            (appointmentItem: any, index: number) => (
                              <li key={index}>
                                <FlexBox justify="space-between">
                                  <h5>{appointmentItem.user.name}</h5>
                                  <p className="time">
                                    <img
                                      src="/media/icons/time.svg"
                                      alt="time"
                                    />
                                    {renderDate(appointmentItem.date)}
                                  </p>
                                  <PaymentStatus status="Pago" />
                                </FlexBox>
                              </li>
                            )
                          )}
                      </AppointmentList>
                    </Box>
                  </Grid>

                  {user.typeUser === "client" && (
                    <Grid item xs={12}>
                      <PendingAppointment>
                        <Subtitle color={"white"}>
                          {!isPending
                            ? "Finalize seu agendamento agora mesmo!"
                            : "Busque profissionais e faça sua consulta agora!"}
                        </Subtitle>
                        {!isPending ? (
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
              ) : (
                <Grid item md={12}>
                  <Subtitle>
                    Olá! Você precisa confirmar seu e-mail antes de entrar no
                    seu painel. Cheque a caixa de entrada do e-mail que você
                    usou para se cadastrar e clique no link de ativação.
                  </Subtitle>
                </Grid>
              )}
            </Container>
          </DashboardContent>
        </DashboardWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;
