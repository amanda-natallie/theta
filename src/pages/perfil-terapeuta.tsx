import { Avatar, Container, Grid } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import BackButton from "../components/general/BackButton";
import PageWrapper from "../components/layout/PageWrapper";
import { CardBox } from "../styles/components/Box";
import { ThetaButton } from "../styles/components/Button";
import { Divider } from "../styles/components/Divider";
import { FlexBox } from "../styles/components/FlexBox";
import {
  Content,
  Header,
  ProfileBlock,
  PublicProfilePageWrapper,
} from "../styles/pages/ProfileProfessional";

const ProfessionalPublicProfilePage = () => {
  return (
    <>
      <Head>
        <title>Perfil Terapeuta</title>
      </Head>
      <PageWrapper>
        <PublicProfilePageWrapper>
          <Header bg="/media/profile/bg.jpg">
            <Container maxWidth="lg">
              <Grid container alignItems="center" justify="space-between">
                <FlexBox column>
                  <BackButton link="/busca-profissionais" bordered />
                  <Divider height="20px" />
                  <ThetaButton theme="purple">Recomendações</ThetaButton>
                </FlexBox>
                <Grid item xs={12} md={3}>
                  <ProfileBlock>
                    <Avatar
                      src="/media/profile/thera.png"
                      alt="uai"
                      className="profile-avatar"
                    />
                    <h1>Davi Lucas</h1>
                    <p>ThetaHealing certificado</p>
                    <p>
                      <strong>98</strong> consultas <span>•</span>{" "}
                      <strong>541</strong> postagens
                    </p>
                  </ProfileBlock>
                </Grid>
                <FlexBox column>
                  <Divider height="40px" />
                  <ThetaButton theme="purple">Enviar Mensagem</ThetaButton>
                </FlexBox>
              </Grid>
            </Container>
          </Header>

          <Content>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <CardBox>
                    <table>
                      <tr>
                        <th>Idade</th>
                        <td>26</td>
                      </tr>
                      <tr>
                        <th>Localização</th>
                        <td>Pernambuco, Arco Verde, Brasil</td>
                      </tr>
                      <tr>
                        <th>Membro desde</th>
                        <td>Setembro de 2020</td>
                      </tr>
                    </table>
                  </CardBox>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
              </Grid>
            </Container>
          </Content>
        </PublicProfilePageWrapper>
      </PageWrapper>
    </>
  );
};

export default ProfessionalPublicProfilePage;
