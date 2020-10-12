import { Container, Grid } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import UserSignUpForm from "../components/forms/UserSignUpForm";
import PlaySvgIcon from "../components/icons/PlaySvgIcon";
import PageWrapper from "../components/layout/PageWrapper";
import { IconButton } from "../styles/components/Button";
import { UserSignUpWrapper } from "../styles/pages/UserSignUp";
import theme from "../styles/theme";

const UserSignUpPage = () => {
  return (
    <PageWrapper noFooter>
      <UserSignUpWrapper>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={5}></Grid>
            <Grid item md={7} className="form-wrapper">
              <header>
                <Link passHref href="/login">
                  <IconButton color="white" bg={theme.palette.primary.main}>
                    <PlaySvgIcon width="16" height="19" />
                  </IconButton>
                </Link>
              </header>

              <UserSignUpForm />
            </Grid>
          </Grid>
        </Container>
      </UserSignUpWrapper>
    </PageWrapper>
  );
};

export default UserSignUpPage;
