import React, { useState, useEffect } from "react";
import {
  Avatar,
  Container,
  FormControl,
  Grid,
  InputLabel,
  SvgIcon,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import BackButton from "../../components/general/BackButton";
import PageWrapper from "../../components/layout/PageWrapper";
import { Box, CardBox } from "../../styles/components/Box";
import { ThetaButton } from "../../styles/components/Button";
import { Divider } from "../../styles/components/Divider";
import { FlexBox } from "../../styles/components/FlexBox";
import { MiniChip } from "../../styles/components/MiniChip";
import {
  Content,
  Header,
  LanguageList,
  Profile,
  ProfileBlock,
  PublicProfilePageWrapper,
} from "../../styles/pages/ProfileProfessional";
import { TimePicker } from "@material-ui/pickers";
import ComingSoon from "../../components/general/ComingSoon/ComingSoon";
import Calendar from "../../components/general/Calendar";
import {
  getProssionalInfo,
  therapistAvailability,
} from "../../services/profissionals";
import { renderIdade, renderPhone, getDateTime, getHour } from "../../utils/helpers";
import { useRouter } from "next/router";
import { Select, MenuItem } from "@material-ui/core";
import { makeAppointment } from "../../services/appointments";
import Loading from "../../components/layout/Loading";
import CheckoutModal from "../../components/layout/CheckoutModal"

const ProfessionalPublicProfilePage = () => {
  const today = new Date();
  /* const [tabActive, setTabActive] = useState("artigos"); */
  const [currentDate] = useState<any>();
  const [checkout, setCheckout] = useState<any>(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [localLoading, setLocalLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [appointmentInformation, setAppointmentInformation] = useState({
    providerName: "",
    providerPic: "",
    date: "",
    time: "",
    price: "",
    button: {
      title: "",
      actionFunction: () => setLocalLoading(true),
    },
  });
  const [thetaInformation, setThetaInformation] = useState<any>({});
  const router = useRouter();
  let userName: any = router.query.terapeuta;
  const dateOptions = { weekday: "long", month: "long", day: "numeric" };

  const getInformation = async (bodyDate?: any) => {
    const response = await getProssionalInfo(userName);
    const hours = await therapistAvailability(response[0].id, bodyDate);
    setThetaInformation({
      ...response[0],
      availability: hours,
    });
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("authToken"));
    userName && getInformation();
  }, []);

  useEffect(() => {
    if(!userName){
      userName = router.query.terapeuta;
    } else {
      thetaInformation.id === undefined && getInformation();
    }
  });

  useEffect(() => {
    if(selectedDate){
      const bodyDate = { 
        day: new Intl.DateTimeFormat('pt-BR', {day: '2-digit'}).format(selectedDate),
        month: new Intl.DateTimeFormat('pt-BR', {month: '2-digit'}).format(selectedDate),
        year: new Intl.DateTimeFormat('pt-BR', {year: 'numeric'}).format(selectedDate)
      }
      getInformation(bodyDate);
    }
  }, [selectedDate]);

  const appointimentMaker = (hour: any) => {
    const provider_id = thetaInformation.id;
    const info = {
      date: selectedDate.toLocaleString("pt-BR", dateOptions),
      time: hour,
      token: isLoggedIn,
    };

    setAppointmentInformation({
      ...info,
      providerName: thetaInformation.name,
      providerPic: thetaInformation.avatar_url,
      price: thetaInformation.price,
      button: {
        title: "CONFIRMAR",
        actionFunction: () => {
          setLocalLoading(true);
          makeAppointment({ ...info, date: selectedDate, provider_id });
      }},
    });
    setCheckout(true);
    console.log("hour");
    console.log(hour);
  };

  return thetaInformation.id !== undefined ? (
    <>
      <Head>
        <title>Perfil Terapeuta</title>
      </Head>
      <PageWrapper>
        <Container maxWidth="lg">
          <Header bg="/media/profile/bg.jpg">
          </Header>
          <BackButton  link="/busca-profissionais"   />
          <ProfileBlock style={{alignItems:'center'}}>

            <ThetaButton className="buttonRecommend" theme="purple">Recomendações</ThetaButton>
            <Profile>
              <Avatar
                src={thetaInformation.avatar_url}
                alt="avatar"
                className="profile-avatar"
              />
              <h1 style={{textAlign:'center', margin:"10px"}}>{`${thetaInformation.name} ${thetaInformation.lastName}`}</h1>
              <p  style={{textAlign:'center'}}>Certificado desde 2019 {/*essa informação deve vir do backend*/} </p>
              {/* <p>
                      <strong>98</strong> consultas <span>•</span>{" "}
                      <strong>541</strong> postagens
                    </p> */}
            </Profile>
          </ProfileBlock>
          <Content style={{justifyContent:"center"}}>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                  <CardBox className="CardTerapeuta"  style={{textAlign:"left"}}>
                    <div style={{display:"flex"}}>
                      <section  style={{display:"flex", flexDirection:"column"}}>
                        <h1>Localização</h1>
                        <p>{thetaInformation.city}, {thetaInformation.state}, Brasil</p>
                        <p>{thetaInformation.email}</p>
                      <Link href="">{`www.thetabrasil.com.br/${thetaInformation.username}`}</Link>
                        <ul style={{display:"flex", alignItems:"center"}}>
                          {thetaInformation.links.map((item) => {
                            switch(item.name){
                              case "Facebook":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                      src="/media/icons/social-media/facebook.svg"
                                      alt="facebook"
                                    />
                                  </Link>
                                </li>)
                                case "Instagram":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                      src="/media/icons/social-media/instagram.svg"
                                      alt="instagram"
                                    />
                                  </Link>
                                </li>)
                                case "Youtube":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                    src="/media/icons/social-media/youtube.svg"
                                    alt="youtube"
                                    />
                                  </Link>
                                </li>)
                                case "Spotify":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                    src="/media/icons/social-media/spotify.svg"
                                    alt="spotify"
                                    />
                                  </Link>
                                </li>)
                                case "Twitter":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                      src="/media/icons/social-media/twitter.svg"
                                      alt="twitter"
                                    />
                                  </Link>
                                </li>)
                                case "Linkedin":
                                  return (<li key={item.link}>
                                  <Link href={item.link}>
                                    <img
                                      src="/media/icons/social-media/linkedin.svg"
                                      alt="linkedin"
                                    />
                                  </Link>
                                </li>)
                            }
                          })}
                        </ul>
                      </section>
                    </div>
                    <div>
                      <section>
                        <h5>{`R$ ${thetaInformation.price}/h`}</h5>
                        <p>
                          Cada consulta dura em média de 40min à 1h. <br /> Preço
                          fixo.
                        </p>
                        {/* <img
                          src="/media/rating.png"
                          style={{ maxHeight: 75, marginTop: 20 }}
                        /> */}
                        </section>
                    </div>
                  </CardBox>
                  
                  <Box className="profile-therapist">
                    {thetaInformation.bio && (
                      <>
                        <h2>Sobre</h2>
                        <Divider height="25px" />
                        <p>{thetaInformation.bio}</p>
                        <Divider height="35px" />
                        <Divider bordered />
                        <Divider height="35px" />
                      </>
                    )}
                    <h2>Certificados ThetaHealing®</h2>
                    <small>
                      *este são os certificados que o profissional possue
                    </small>
                    <Divider height="40px" />
                    <div>
                    <MiniChip style={{width:"100%"}}>
                      {thetaInformation.certificates.map((item) => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                    </MiniChip>
                    </div>
                    
                    <Divider height="35px" />
                    <Divider bordered />
                    <Divider height="35px" />
                    <h2>Idiomas</h2>
                    <Divider height="30px" />
                    <LanguageList>
                      {
                        thetaInformation.languages.map((item) => {
                          switch(item.name){
                            case 'English':
                              return (
                                <li key={item.name}>
                                  <img
                                    src="/media/icons/countries/usa.svg"
                                    alt="brazil"
                                  />
                                  {item.name}
                                </li>
                              )
                              case 'Portuguese':
                                return (
                                  <li key={item.name}>
                                  <img
                                    src="/media/icons/countries/brazil.svg"
                                    alt="brazil"
                                  />
                                  {item.name}
                                </li>
                                )
                          }
                        })
                      }
                    </LanguageList>
                    <Divider height="30px" />
                  </Box>
                  <Divider height="30px" />

                  {/* <TabList>
                    <li
                      onClick={() => setTabActive("artigos")}
                      className={tabActive === "artigos" ? "active" : ""}
                    >
                      Artigos
                    </li>
                    <li
                      onClick={() => setTabActive("galeria")}
                      className={tabActive === "galeria" ? "active" : ""}
                    >
                      Galeria
                    </li>
                  </TabList> 
                  <ComingSoon /> */}
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  {thetaInformation.availability.length > 0 && (
                    <>
                      <Divider height="10px" />
                     <div style={{display:"flex"}}>
                     <img src="/media/icons/arrowDown.svg" alt="" />
                        <span>Escolha o dia desejado &nbsp;</span>
                     </div>
                       
                      <Calendar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                      />
                      <Divider height="10px" />
                      {selectedDate && (
                        <FlexBox>
                          {thetaInformation.availability.some(
                            (e: any) => e.available === true
                          ) ? (
                              <FormControl
                                fullWidth
                                variant="outlined"
                                margin="normal"
                              >
                                <InputLabel disableAnimation shrink={false}>
                                  Escolha seu horário
                              </InputLabel>
                                <Select
                                  MenuProps={{
                                    anchorOrigin: {
                                      vertical: "bottom",
                                      horizontal: "left",
                                    },
                                    transformOrigin: {
                                      vertical: "top",
                                      horizontal: "left",
                                    },
                                    getContentAnchorEl: null,
                                  }}
                                  onChange={(e: any) =>
                                    appointimentMaker(e.target.value)
                                  }
                                >
                                  {thetaInformation.availability.map(
                                    (newItem: any) =>
                                      newItem.available && (
                                        <MenuItem
                                          onChange={(e: any) =>
                                            appointimentMaker(e.target.value)
                                          }
                                        >
                                          {`${newItem.hour}:00`}
                                        </MenuItem>
                                      )
                                  )}
x                                </Select>
                              </FormControl>
                            ) : (
                              "Desculpe, este terapeuta não tem horários disponíveis no dia escolhido!"
                            )}
                        </FlexBox>
                      )}
                    </>
                  )}

                  {/*<Divider height="20px" />
                  <FlexBox>
                    <Link passHref href="/login">
                      <ThetaButton theme="purple" fullWidth>
                        Avançar
                      </ThetaButton>
                    </Link>
                  </FlexBox> 
                  <Divider height="30px" />
                  <hr />*/}
                  <Divider height="20px" />
                  {/* <h2>Perfis Similares</h2>
                  <Divider height="20px" />
                  <ComingSoon /> */}
                </Grid>
              </Grid>
            </Container>
          </Content>
        </Container>
        <CheckoutModal
        info={appointmentInformation}
        isLoading={localLoading}
        isOpen={checkout}
        onClose={() => setCheckout(false)}
      />
      </PageWrapper>
    </>
  ) : (
      <Loading />
    );
};

export default ProfessionalPublicProfilePage;
