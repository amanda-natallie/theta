import { Avatar, Container, Grid, SvgIcon } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import BackButton from "../components/general/BackButton";
import YoutubeSvgIcon from "../components/icons/YoutubeSvgIcon";
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
                    <div className="left">
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
                      <FlexBox column>
                        <p>
                          <SvgIcon>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.57048 1.3386C9.42176 1.31728 9.27238 1.36125 9.15353 1.45585C9.03137 1.55179 8.95501 1.69036 8.93842 1.84558C8.90323 2.15937 9.12963 2.44317 9.44301 2.47848C11.6041 2.71965 13.2839 4.40316 13.5269 6.57101C13.5594 6.86147 13.8031 7.08066 14.0939 7.08066C14.1158 7.08066 14.137 7.07932 14.1589 7.07666C14.311 7.06 14.4464 6.98472 14.542 6.8648C14.637 6.74489 14.6801 6.59566 14.6629 6.44309C14.3601 3.73828 12.2667 1.63906 9.57048 1.3386ZM9.612 3.66C9.29464 3.60137 9.00318 3.8039 8.94276 4.11369C8.88234 4.42347 9.0855 4.72593 9.39423 4.78656C10.3237 4.96777 11.0415 5.68727 11.2234 6.61997V6.62063C11.2752 6.88911 11.5115 7.08431 11.7837 7.08431C11.8202 7.08431 11.8568 7.08098 11.8939 7.07432C12.2027 7.01236 12.4058 6.71057 12.3454 6.40012C12.0739 5.00707 11.0016 3.93115 9.612 3.66ZM10.6666 10.0603C10.9676 9.88674 11.3076 9.69073 11.7364 9.78195C12.1248 9.86389 13.4487 10.9385 13.8112 11.3109C14.0489 11.5547 14.181 11.8066 14.2016 12.0584C14.2374 13.0464 12.8949 14.1743 12.6506 14.3148C12.3259 14.5487 11.9482 14.6666 11.5239 14.6666C11.0904 14.6666 10.607 14.5433 10.0799 14.2975C7.21962 13.1037 2.85027 8.82061 1.69503 5.98256C1.21567 4.92595 1.21235 4.05455 1.68706 3.39966C1.87628 3.09254 2.95517 1.80876 3.9212 1.84939C4.17814 1.87138 4.42778 2.00329 4.67277 2.24312C5.04325 2.60621 6.09094 3.93396 6.17194 4.3237C6.26157 4.75673 6.06504 5.10116 5.89043 5.40362C5.85318 5.46864 5.803 5.5458 5.74803 5.63033C5.53939 5.95115 5.26168 6.37816 5.35994 6.65076C6.06438 8.38024 7.69168 9.88921 9.4219 10.5981C9.68946 10.6953 10.1162 10.4156 10.436 10.206C10.5193 10.1514 10.5954 10.1016 10.6595 10.0644L10.6666 10.0603Z"
                              fill="#B8B8B8"
                            />
                          </SvgIcon>
                          +55 (31) 98956-8956
                        </p>
                        <p>davilucashealing@gmail.com</p>
                        <Link href="">www.davilucashealing.com.br</Link>
                        <ul>
                          <li>
                            <Link href="">
                              <YoutubeSvgIcon width="16" height="11" />
                            </Link>
                          </li>
                        </ul>
                      </FlexBox>
                    </div>
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
