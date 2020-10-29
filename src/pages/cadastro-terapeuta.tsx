import { Container, Grid } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import ThetaSignUpForm from "../components/forms/ThetaSignUpForm";
import BackButton from "../components/general/BackButton";
import PageWrapper from "../components/layout/PageWrapper";
import { UserSignUpWrapper } from "../styles/pages/UserSignUp";

const UserSignUpPage = () => {
  return (
    <>
      <Head>
        <title>Cadastre-se no ThetaBrasil</title>
      </Head>
      <PageWrapper noFooter>
        <UserSignUpWrapper>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item md={5}></Grid>
              <Grid item md={7} className="form-wrapper">
                <BackButton link="/login" />
                <ThetaSignUpForm />
              </Grid>
            </Grid>
          </Container>
        </UserSignUpWrapper>
      </PageWrapper>
    </>
  );
};

export default UserSignUpPage;
