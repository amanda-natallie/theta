import { Container, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Box } from "../components/general/Box";
import { Subtitle } from "../components/general/Typography";
import ThetaIconSvgIcon from "../components/icons/ThetaIconSvgIcon";
import PageWrapper from "../components/layout/PageWrapper";
import { UserSignInWrapper } from "../styles/pages/UserSignIn";
import theme from "../styles/theme";
import * as Yup from "yup";
import formConstants from "../utils/constant/formConstants";
import { NavigationButton, ThetaButton } from "../styles/components/Button";
import { Divider } from "../styles/components/Divider";

const UserSignInPage = () => {
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
      //
    },
  });

  return (
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
                  <NavigationButton align="right" href="/" underline>
                    Esqueceu sua senha?
                  </NavigationButton>
                </Grid>
                <Grid item xs={12}>
                  <ThetaButton theme="purple" fullWidth>
                    Login
                  </ThetaButton>
                </Grid>
              </Grid>
              
              <footer>
                <p>Ainda não tem uma conta? <NavigationButton  href="/" >
                    Cadastre-se aqui
                  </NavigationButton></p>
              </footer>
            </Box>
          </Grid>
        </Grid>
      </UserSignInWrapper>
    </PageWrapper>
  );
};

export default UserSignInPage;
