import { Container, Grid, TextField } from "@material-ui/core";
import { useFormik, Form } from "formik";
import React from "react";
import { Box } from "../styles/components/Box";
import { Subtitle } from "../styles/components/Typography";
import PageWrapper from "../components/layout/PageWrapper";
import { UserSignInWrapper } from "../styles/pages/UserSignIn";
import * as Yup from "yup";
import formConstants from "../utils/constant/formConstants";
import { NavigationButton, ThetaButton } from "../styles/components/Button";
import { Divider } from "../styles/components/Divider";
import Link from "next/link";
import Head from "next/head";
import {userLogin} from  "../services/users";
import { useDispatch } from 'react-redux'

const UserSignInPage = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      user: Yup.string().required("Obrigatório"),
      password: Yup.string().required("Obrigatório"),
    }),
    onSubmit: (values: formConstants.LoginProps) => {
      dispatch({ type: 'loading' })
      userLogin(values.user, values.password);
    },
  });

  return (
  <>
    <Head>
      <title>Faça seu login</title>
    </Head>
    <PageWrapper noFooter noPadding>
      <UserSignInWrapper>
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
          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box>
              <Divider height="15px" />
              <Subtitle>Bem-vindo(a) de volta</Subtitle>
              <Divider height="30px" />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    error={false}
                    fullWidth
                    label="Nome de usuário/E-mail"
                    placeholder="usuario@thetabrasil.com"
                    value={formik.values.user}
                    onBlur={formik.handleBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      formik.setFieldValue("user", event.target.value, true);
                    }}
                    variant="outlined"
                    helperText={
                      formik.touched.user && formik.errors.user
                        ? formik.errors.user
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  type="password"
                    error={false}
                    fullWidth
                    label="Senha"
                    placeholder="********"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      formik.setFieldValue(
                        "password",
                        event.target.value,
                        true
                      );
                    }}
                    variant="outlined"
                    helperText={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : null
                    }
                  />
                  <Divider height="5px" />
                  <Link  passHref href="/esqueci-minha-senha">
                    <NavigationButton align="right" underline>
                      Esqueceu sua senha?
                    </NavigationButton>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                    <ThetaButton theme="purple" fullWidth onClick={() => formik.submitForm()}>
                      Login
                    </ThetaButton>
                </Grid> 
              </Grid>
              <footer>
                <p>
                  Ainda não tem uma conta? 
                  <Link  passHref href="/cadastro-usuario">
                    <NavigationButton style={{ marginLeft: 5}}> Cadastre-se aqui</NavigationButton>
                  </Link>
                </p>
                <p>
                  
                  <Link  passHref href="/cadastro-terapeuta">
                    <NavigationButton style={{ marginRight: 5}}> Clique aqui </NavigationButton>
                  </Link>
                  se você é um terapeuta e precisa se cadastrar
                </p>
              </footer>
            </Box>
          </Grid>
        </Grid>
      </UserSignInWrapper>
    </PageWrapper>
  </>
  );
};

export default UserSignInPage;
