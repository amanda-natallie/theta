import { Avatar, Container, Grid, Dialog } from "@material-ui/core";
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
import { renderDate, getDateExtend, getDateTime } from "../../utils/helpers";
import { useRouter } from "next/router";
import { renderAppointmentText } from "../../services/appointments";
import PaypalButton from "../../components/general/PaypalButton";

const Dashboard = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(undefined);
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [user, setUser] = useState(undefined);
  console.log(currentAppointment);

  const getInformation = async () => {
    if (Object.prototype.hasOwnProperty.call(localStorage, "userInformation")) {
      const userInfo = JSON.parse(
        localStorage.getItem("userInformation") || "{}"
      );
      const token: string = localStorage.getItem("authToken");
      setUser(userInfo);
      setIsLoggedIn(token);

      user && setIsEmailConfirmed(user.confirmed_email);

      const response =
        userInfo.typeUser === "client"
          ? await userAppointments("2bcabf18-5c0f-4bd4-91df-2b8162a8f489")
          : await therapistAppointments("a74ce34d-d256-46aa-829a-25441c58bea7");
      setAppointments(response);
      console.log("kaakak", response);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

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
                  {/* <Grid item md={4}>
                    {user.typeUser === "client" ? (
                      <ClientFavorites />
                    ) : (
                      <TherapistCertificates />
                    )}
                  </Grid> */}
                  <Grid item md={6}>
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
                  <Grid item md={6}>
                    <Box>
                      <h2>Agendamentos</h2>
                      {user.typeUser && "client" ? (
                        <AppointmentList>
                          {appointments &&
                            appointments.map(
                              (appointmentItem: any, index: number) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    setCurrentAppointment(appointmentItem)
                                  }
                                >
                                  <FlexBox justify="space-between">
                                    <h5>{appointmentItem.therapist.name}</h5>
                                    <p className="time">
                                      <img
                                        src="/media/icons/time.svg"
                                        alt="time"
                                      />
                                      {renderDate(appointmentItem.date)}
                                    </p>
                                    <PaymentStatus
                                      status={appointmentItem.status}
                                    />
                                  </FlexBox>
                                </li>
                              )
                            )}
                        </AppointmentList>
                      ) : (
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
                      )}
                    </Box>
                  </Grid>

                  {user.typeUser === "client" && currentAppointment && (
                    <Grid item xs={12}>
                      <PendingAppointment>
                        <Subtitle color={"white"}>
                          {renderAppointmentText(currentAppointment.status)}
                        </Subtitle>

                        <>
                          <FlexBox>
                            <p>
                              <img
                                src="/media/icons/calendar.svg"
                                alt="calendar"
                              />{" "}
                              <p> {currentAppointment.therapist.name}</p>
                              <span>•</span>
                              <p>ThetaHealer Certificado</p>
                            </p>
                          </FlexBox>
                          <FlexBox>
                            <p>
                              <img
                                src="/media/icons/calendar.svg"
                                alt="calendar"
                              />
                              {getDateExtend(currentAppointment.date)}
                            </p>
                            <span>•</span>
                            <p>
                              <img src="/media/icons/time.svg" alt="time" />{" "}
                              {`${getDateTime(
                                currentAppointment.date
                              )} - horário de Brasília`}
                            </p>
                          </FlexBox>
                          <ThetaButton
                            theme="rainbow"
                            style={{ alignSelf: "baseline" }}
                            onClick={() => setShowDialog(true)}
                          >
                            Pagar agora
                          </ThetaButton>
                        </>
                        <Dialog
                          onClose={() => setShowDialog(false)}
                          open={showDialog}
                        >
                          <div style={{ margin: 30 }}>
                            <PaypalButton setShowDialog={setShowDialog} />{" "}
                          </div>
                        </Dialog>
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
