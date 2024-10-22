import { Avatar, Container, Grid, Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PaymentStatus from "../../components/general/PaymentStatus";
import TherapistCard from "../../components/general/ProfileCard/TherapistCard";
import UserCard from "../../components/general/ProfileCard/UserCard";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import { Box } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { FlexBox } from "../../styles/components/FlexBox";
import ReactLoading from "react-loading";
import { Subtitle } from "../../styles/components/Typography";
import {
  AppointmentList,
  DashboardContent,
  PendingAppointment,
} from "../../styles/pages/dashboard/Dashboard";
import Loading from "../../components/layout/Loading";
import { therapistAppointments } from "../../services/profissionals";
import { userAppointments } from "../../services/users";
import { renderDate, getDateExtend, getDateTime, getDateDifference } from "../../utils/helpers";
import { useRouter } from "next/router";
import { appointmentUpdateStatus, renderAppointmentText, renderAppointmentTexTherapist } from "../../services/appointments";
import PaypalButton from "../../components/general/PaypalButton";
import { appointmentMock, userInfoMock } from "../../mocks";
import {BarLoader} from "react-spinners"

interface userProps {
  avatar_url: string | undefined,
  bio: string | undefined,
  certificates: string | undefined,
  city: string,
  confirmed_email: string,
  consultations: number,
  created_at: string,
  dayBorn: string,
  email: string,
  id: string,
  languages: string | undefined,
  lastName: string,
  links: string | undefined,
  monthBorn: string,
  name: string,
  phone: string,
  price: string,
  state: string,
  typeUser: string,
  updated_at: string,
  username: string,
  yearBorn: string,
}

interface appointmentsProps {
  id: string,
  therapist_id: string,
  therapist: {
    id: string,
    lastName: string,
    name: string,
  }
  user_id: string,
  date: string,
  url: string,
  status: string,
  price: string | undefined,
  order_id: string | undefined,
  created_at: string,
  updated_at: string,
}

const Dashboard = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [appointments, setAppointments] = useState<appointmentsProps | any>();
  const [currentAppointment, setCurrentAppointment] = useState(undefined);
  const [localLoading, setLocalLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [] = useState(false);
  const [user, setUser] = useState<userProps | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const getInformation = async () => {
    if (Object.prototype.hasOwnProperty.call(localStorage, "userInformation")) {
      const userInfo = JSON.parse(
        localStorage.getItem("userInformation") || "{}"
      );
      const token: string = localStorage.getItem("authToken");
      setIsLoggedIn(token);
      setUser(userInfo);

      //user && setIsEmailConfirmed(user.confirmed_email);

      const response =
        userInfo.typeUser === "client"
          ? await userAppointments(userInfo.id)
          : await therapistAppointments(userInfo.id);
      setAppointments(response);
      response && response.length > 0 && setCurrentAppointment(
        {...response[0], 
          closeToMetting: getDateDifference(response[0].date) < 10, 
          bankTransfer: getDateDifference(response[0].date) > 4400})
      setLocalLoading(false)
    } else {
      router.push("/login");
    }
  }; 

  useEffect(() => {
    getInformation();
  }, []); 
  
  return (
    <>
      { isLoggedIn &&  user ? (
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
                      className="profile-avatar"> 
                      {user.avatar_url}
                      </Avatar>
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
                     {localLoading ? <div style={{ margin: "auto", display: "table" }} ><ReactLoading type="spin" color="#7643FF" /></div>
                      : user.typeUser && "client" ? (
                        <AppointmentList>
                          {appointments && appointments.length > 0 ?
                            appointments.map(
                              (appointmentItem: any, index: number) => (
                                <li
                                  key={index}
                                  onClick={() =>
                                    setCurrentAppointment({...appointmentItem, closeToMetting: getDateDifference(appointmentItem.date) < 10, bankTransfer: getDateDifference(appointmentItem.date) > 4400})
                                  }
                                >
                                  <FlexBox justify="space-between" style={{
                                    alignItems: "center",
                                    height: "65px"
                                  }}>
                                    <h5>{appointmentItem && user.typeUser === "client" ? appointmentItem.therapist.name : `${appointmentItem.user.name} ${appointmentItem.user.lastName}`}</h5>
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
                            ) : <li><h5 style={{textAlign: 'center', marginTop: 10}}>Você não tem agendamentos</h5></li>}
                        </AppointmentList>
                      ) : (
                        <AppointmentList>
                          {appointments && appointments.length > 0 ?
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
                            ) : <li><h5 style={{textAlign: 'center', marginTop: 10}}>Você não tem agendamentos</h5></li>}
                        </AppointmentList>
                      )}
                    </Box>
                  </Grid>

                  {user.typeUser === "client" ? (
                    currentAppointment && (
                    <Grid item xs={12}>
                      <PendingAppointment>
                        <Subtitle color={"white"}>
                          {renderAppointmentText(currentAppointment.status)}
                        </Subtitle>
                        {currentAppointment.status !== "Cancelado" ? (
                        <>
                          <FlexBox>
                            <p>
                              <img
                                src="/media/icons/calendar.svg"
                                alt="calendar"
                              />{" "}
                              <p> {currentAppointment.therapist ? currentAppointment.therapist.name : 'Prisclla Leite'}</p>
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
                          {currentAppointment.status === "Aguardando Pagamento" && (
                            <ThetaButton
                              theme="rainbow"
                              style={{ alignSelf: "baseline" }}
                              onClick={() => setShowDialog(true)}
                            >
                              Pagar agora
                            </ThetaButton>
                          )}
                          {currentAppointment.status === "Confirmado" && (
                            /*TO DO: add lógica pra mostrar / esconder botão */ 
                            /* <p>Iremos liberar uma sala para você e seu terapeuta 10 minutos antes do horário da consulta.</p> */
                           currentAppointment.closeToMetting ? (
                            <Link passHref href={currentAppointment.url}>
                                <ThetaButton
                                  target="_blank"
                                  theme="rainbow"
                                  style={{ alignSelf: "baseline" }}>
                                  Entre em sua sala
                                </ThetaButton>
                            </Link>

                           )
                            : (
                              <ThetaButton
                                  theme="rainbow"
                                  style={{ alignSelf: "baseline" }}>
                                  Aguarde para iniciar sua sessão
                                </ThetaButton>
                              
                            )
                          )}
                        </>
                        ) : (
                          <ThetaButton
                              theme="rainbow"
                              style={{ alignSelf: "baseline" }}
                              onClick={() => router.push("busca-terapeutas")}
                            >
                              Buscar outros profissionais
                            </ThetaButton>
                        )} 
                        <Dialog
                          onClose={() => setShowDialog(false)}
                          open={showDialog}
                        >
                          <div style={{ margin: 30 }}>
                            <PaypalButton appointmentId={currentAppointment.id} ammount={currentAppointment.price} 
                              setShowDialog={setShowDialog} bankTransfer={currentAppointment.bankTransfer}/>
                          </div>
                        </Dialog>
                      </PendingAppointment>
                    </Grid>
                  
                  )) : (
                    currentAppointment && (
                    <Grid item xs={12}>
                    <PendingAppointment>
                      <Subtitle color={"white"}>
                        {renderAppointmentTexTherapist(currentAppointment.status)}
                      </Subtitle>
                      {currentAppointment.status !== "Cancelado" ? (
                      <>
                        <FlexBox>
                          
                          
                            <p style={{marginRight: 30}}> <strong style={{marginRight: 5}}>Cliente: </strong> {`${currentAppointment.user.name} ${currentAppointment.user.lastName}`}</p>
                            {/* <p> <strong style={{marginRight: 5}}>E-mail: </strong> amanda.natallie.2@gmail.com</p>                             */}
                          
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
                       
                        {currentAppointment.status === "Aguardando Confirmação" && (
                          /*TO DO: add lógica pra mostrar / esconder botão */ 
                          /* <p>Iremos liberar uma sala para você e seu terapeuta 10 minutos antes do horário da consulta.</p> */
                          <FlexBox>
                            <ThetaButton
                              theme="rainbow"
                              style={{ alignSelf: "baseline", marginRight: 20 }}
                              onClick={() => appointmentUpdateStatus(currentAppointment.id, "Confirmado")}
                            >
                             {isLoading ? <BarLoader color="white"/> : "Aceitar solicitação"}  
                            </ThetaButton>

                            <ThetaButton
                              theme="purple"
                              style={{ alignSelf: "baseline" }}
                              onClick={() => {
                                setIsLoading(true);
                                appointmentUpdateStatus(currentAppointment.id, "Cancelado")}
                              }
                            >
                              {isLoading ? <BarLoader color="white"/> : "Cancelar solicitação"} 
                            </ThetaButton>
                          </ FlexBox>
                        )}
                        {currentAppointment.status === "Confirmado" && (
                          /*TO DO: add lógica pra mostrar / esconder botão */ 
                          /* <p>Iremos liberar uma sala para você e seu terapeuta 10 minutos antes do horário da consulta.</p> */
                          currentAppointment.closeToMetting ? (
                            <Link passHref href={currentAppointment.url}>
                                <ThetaButton
                                  target="_blank"
                                  theme="rainbow"
                                  style={{ alignSelf: "baseline" }}>
                                  Entre em sua sala
                                </ThetaButton>
                            </Link>

                           )
                            : (
                              <ThetaButton
                                  theme="rainbow"
                                  style={{ alignSelf: "baseline" }}>
                                  Aguarde para iniciar sua sessão
                                </ThetaButton>
                              
                            )
                          )}
                        </>
                        ) : (
                          <ThetaButton
                              theme="rainbow"
                              style={{ alignSelf: "baseline" }}
                              onClick={() => router.push("busca-terapeutas")}
                            >
                              Buscar outros profissionais
                            </ThetaButton>
                        )} 
                      <Dialog
                        onClose={() => setShowDialog(false)}
                        open={showDialog}
                      >
                        <div style={{ margin: 30 }}>
                        <PaypalButton appointmentId={currentAppointment.id} ammount={currentAppointment.price} 
                              setShowDialog={setShowDialog} bankTransfer={currentAppointment.bankTransfer}/>
                        </div>
                      </Dialog>
                    </PendingAppointment>
                  </Grid>
                
                  ))}
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
