import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import formConstants from "../../utils/constant/formConstants";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import { Title } from "../../styles/components/Typography";
import { useDispatch } from "react-redux";
import { handleUserData } from "../../store/actions/UserActions";
import { ThetaButton } from "../../styles/components/Button";
import Link from "next/link";
import {userRegistration} from "../../services/users"

const UserSignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDay: undefined,
      birthMonth: undefined,
      birthYear: undefined,
      state: "",
      city: "",
      phone: "",
      ddd: undefined,
      user: "",
      password: "",
      emailConfirm: "",
      passwordConfirm: "",
      termsAccepted: false,
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Obrigatório"),
      lastName: Yup.string().required("Obrigatório"),
      email: Yup.string().required("Obrigatório"),
      emailConfirm: Yup.string()
        .required("Obrigatório")
        .oneOf([Yup.ref("email"), null], "Os e-mails não combinam"),
      birthDay: Yup.number().required("Obrigatório"),
      birthMonth: Yup.number().required("Obrigatório"),
      birthYear: Yup.number().required("Obrigatório"),
      state: Yup.string().required("Obrigatório"),
      city: Yup.string().required("Obrigatório"),
      phone: Yup.string().required("Obrigatório"),
      user: Yup.string().required("Obrigatório"),
      password: Yup.string().required("Obrigatório"),
      passwordConfirm: Yup.string()
        .required("Obrigatório")
        .oneOf([Yup.ref("password"), null], "As senhas não combinam"),
      termsAccepted: Yup.boolean().required("Obrigatório"),
    }),
    onSubmit: (values: formConstants.UserProps) => {
      userRegistration({
        name: values.firstName,
        lastName: values.lastName,
        email: values.email,
        email_confirmation: values.emailConfirm,
        dayBorn: values.birthDay.toString(),
        monthBorn: values.birthMonth.toString(),
        yearBorn: values.birthYear.toString(),
        state: values.state,
        city: values.city,
        phone: values.phone,
        username: values.user,
        password: values.password,
        password_confirmation: values.passwordConfirm,
      })
    },
  });

  return (
    <Container maxWidth="sm" className="form signup-form">
      <Title>Entre para a ThetaBrasil</Title>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <TextField
              error={false}
              fullWidth
              label="Primeiro Nome"
              placeholder="Insira seu nome"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("firstName", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              error={false}
              label="Ultimo Nome"
              placeholder="Insira seu sobrenome"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("lastName", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : null
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="E-mail"
              placeholder="Insira seu e-mail"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("email", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="Confirme seu E-mail"
              placeholder="Insira seu e-mail"
              value={formik.values.emailConfirm}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("emailConfirm", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.emailConfirm && formik.errors.emailConfirm
                  ? formik.errors.emailConfirm
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} className="divider">
            <FormLabel>Data de Nascimento</FormLabel>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              error={false}
              label="Dia"
              placeholder="Dia"
              value={formik.values.birthDay}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("birthDay", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.birthDay && formik.errors.birthDay
                  ? formik.errors.birthDay
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              error={false}
              label="Mês"
              placeholder="Mês"
              value={formik.values.birthMonth}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("birthMonth", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.birthMonth && formik.errors.birthMonth
                  ? formik.errors.birthMonth
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              error={false}
              label="Ano"
              placeholder="Ano"
              value={formik.values.birthYear}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("birthYear", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.birthYear && formik.errors.birthYear
                  ? formik.errors.birthYear
                  : null
              }
            />
          </Grid>

          <Grid item xs={12} className="divider">
            <FormLabel>Localização</FormLabel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              error={false}
              label="Estado"
              placeholder="Digite seu estado"
              value={formik.values.state}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("state", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.state && formik.errors.state
                  ? formik.errors.state
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              error={false}
              label="Cidade"
              placeholder="Digite sua cidade"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("city", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} className="divider">
            <FormLabel>Nº de Telefone</FormLabel>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              fullWidth
              error={false}
              label="DDD"
              placeholder="Digite seu DDD"
              value={formik.values.ddd}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("ddd", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.ddd && formik.errors.ddd
                  ? formik.errors.ddd
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <TextField
              fullWidth
              error={false}
              label="Telefone"
              placeholder="Digite seu telefone"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("phone", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : null
              }
            />
          </Grid>
          <Grid item xs={12} className="divider">
            <FormLabel>Dados de Acesso</FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="Nome de usuário"
              placeholder="Escolha um nome de usuário"
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
              fullWidth
              error={false}
              type="password"
              label="Senha"
              placeholder="Escolha uma senha"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("password", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              type="password"
              label="Confirme sua Senha"
              placeholder="Confirme sua senha"
              value={formik.values.passwordConfirm}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue(
                  "passwordConfirm",
                  event.target.value,
                  true
                );
              }}
              variant="outlined"
              helperText={
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  ? formik.errors.passwordConfirm
                  : null
              }
            />
            <p>
              Use 8 ou mais caracteres com uma mistura de letras, números e
              símbolos. Não deve conter seu nome ou nome de usuário.
            </p>
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel
            className="accepterms"
              control={
                <Checkbox
                  checked={formik.values.termsAccepted}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    formik.setFieldValue(
                      "termsAccepted",
                      !formik.values.termsAccepted,
                      true
                    );
                  }}
                  color="primary"
                />
              }
              label="Ao usar a plataforma ThetaBrasil concordo com os termos de uso"
            />
          </Grid>
          <Grid item xs={12}>
            
              <ThetaButton as="button" onClick={() => formik.submitForm()} theme="purple" fullWidth >Cadastrar</ThetaButton>
           
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserSignUpForm;
