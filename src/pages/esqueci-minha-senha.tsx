import { Container, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Box } from "../styles/components/Box";
import { Subtitle, Title } from "../styles/components/Typography";
import ThetaIconSvgIcon from "../components/icons/ThetaIconSvgIcon";
import PageWrapper from "../components/layout/PageWrapper";
import { UserSignInWrapper } from "../styles/pages/UserSignIn";
import theme from "../styles/theme";
import * as Yup from "yup";
import formConstants from "../utils/constant/formConstants";
import { NavigationButton, ThetaButton } from "../styles/components/Button";
import { Divider } from "../styles/components/Divider";
import Link from "next/link";
import Head from "next/head";
import { ForgotPasswordWrapper } from "../styles/pages/ForgotPassword";
import BackButton from "../components/general/BackButton";

const ForgotPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Obrigatório"),
    }),
    onSubmit: (values: formConstants.LoginProps) => {
      //
    },
  });

  return (
    <>
      <Head>
        <title>Faça seu login</title>
      </Head>
      <PageWrapper noFooter noPadding>
        <ForgotPasswordWrapper>
        <Container maxWidth="lg">
          <BackButton link="/login" />
          <Grid
            container
            alignContent="center"
            justify="center"
            className="form-wrapper"
          >
            <Grid item xs={2}>
              <img src="/media/13.svg" alt="logo" className="logo" />
            </Grid>
            <Divider height="30px" />
            <Grid item xs={12} sm={8} md={5} lg={4}>
              <Divider height="15px" />
              <Title>Esqueceu a senha?</Title>
              <p>
                Insira o endereço de e-mail associado à sua conta e enviaremos
                um link para redefinir sua senha
              </p>
              <Divider height="30px" />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    error={false}
                    fullWidth
                    label="E-mail"
                    placeholder="usuario@thetabrasil.com"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      formik.setFieldValue("email", event.target.value, true);
                    }}
                    variant="outlined"
                    helperText={
                      formik.touched.user && formik.errors.email
                        ? formik.errors.email
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Link passHref href="/">
                    <ThetaButton theme="purple" fullWidth>
                      Enviar
                    </ThetaButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        </ForgotPasswordWrapper>
      </PageWrapper>
    </>
  );
};

export default ForgotPasswordPage;
