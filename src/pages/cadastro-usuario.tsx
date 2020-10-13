import { Container, Grid } from "@material-ui/core";
import React from "react";
import UserSignUpForm from "../components/forms/UserSignUpForm";
import BackButton from "../components/general/BackButton";
import PageWrapper from "../components/layout/PageWrapper";
import { UserSignUpWrapper } from "../styles/pages/UserSignUp";

const UserSignUpPage = () => {
  return (
    <PageWrapper noFooter>
      <UserSignUpWrapper>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={5}></Grid>
            <Grid item md={7} className="form-wrapper">
              <BackButton link="/login" />
              <UserSignUpForm />
            </Grid>
          </Grid>
        </Container>
      </UserSignUpWrapper>
    </PageWrapper>
  );
};

export default UserSignUpPage;
