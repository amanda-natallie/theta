import React, { useState } from "react";
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
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import { Title } from "../../styles/components/Typography";
import { useDispatch } from "react-redux";
import { ThetaButton } from "../../styles/components/Button";
import {userRegistration} from "../../services/users"
import { BarLoader } from "react-spinners";

const UserSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDay: undefined,
      birthMonth: undefined,
      birthYear: undefined,
      city: "",
      state: "",
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
      birthMonth: Yup.string().required("Obrigatório"),
      birthYear: Yup.number().required("Obrigatório"),
      city: Yup.string().required("Obrigatório"),
      state: Yup.string().required("Obrigatório"),
      phone: Yup.string().required("Obrigatório"),
      user: Yup.string().required("Obrigatório"),
      password: Yup.string().required("Obrigatório"),
      passwordConfirm: Yup.string()
        .required("Obrigatório")
        .oneOf([Yup.ref("password"), null], "As senhas não combinam"),
      termsAccepted: Yup.bool().oneOf([true], 'Obrigatório'), 
    }),
    onSubmit: (values: formConstants.UserProps) => {
      setLoading(true)
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
        phone: values.ddd + values.phone,
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
              fullWidth
              label="Primeiro Nome"
              placeholder="Insira seu nome"
              value={formik.values.firstName}
              variant="outlined"
              id="firstName"
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              label="Ultimo Nome"
              placeholder="Insira seu sobrenome"
              value={formik.values.lastName}
              variant="outlined"
              id="lastName"
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-mail"
              placeholder="Insira seu e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              variant="outlined"
              id="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirme seu E-mail"
              placeholder="Insira seu e-mail"
              value={formik.values.emailConfirm}
              onChange={formik.handleChange}
              variant="outlined"
              id="emailConfirm"
              error={formik.touched.emailConfirm && Boolean(formik.errors.emailConfirm)}
              helperText={formik.touched.emailConfirm && formik.errors.emailConfirm}
            />
          </Grid>
          <Grid item xs={12} className="divider">
            <FormLabel>Data de Nascimento</FormLabel>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Dia"
              placeholder="Dia"
              value={formik.values.birthDay}
              onChange={formik.handleChange}
              variant="outlined"
              id="birthDay"
              error={formik.touched.birthDay && Boolean(formik.errors.birthDay)}
              helperText={formik.touched.birthDay && formik.errors.birthDay}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Mês"
              placeholder="Mês"
              value={formik.values.birthMonth}
              onChange={formik.handleChange("birthMonth")}
              variant="outlined"
              id="birthMonth"
              error={formik.touched.birthMonth && Boolean(formik.errors.birthMonth)}
              helperText={formik.touched.birthMonth && formik.errors.birthMonth}
            >
              <MenuItem value="Janeiro">Janeiro</MenuItem>
              <MenuItem value="Fevereiro">Fevereiro</MenuItem>
              <MenuItem value="Março">Março</MenuItem>
              <MenuItem value="Abril">Abril</MenuItem>
              <MenuItem value="Maio">Maio</MenuItem>
              <MenuItem value="Junho">Junho</MenuItem>
              <MenuItem value="Julho">Julho</MenuItem>
              <MenuItem value="Agosto">Agosto</MenuItem>
              <MenuItem value="Setembro">Setembro</MenuItem>
              <MenuItem value="Outubro">Outubro</MenuItem>
              <MenuItem value="Novembro">Novembro</MenuItem>
              <MenuItem value="Dezembro">Dezembro</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Ano"
              placeholder="Ano"
              value={formik.values.birthYear}
              onChange={formik.handleChange}
              variant="outlined"
              id="birthYear"
              error={formik.touched.birthYear && Boolean(formik.errors.birthYear)}
              helperText={formik.touched.birthYear && formik.errors.birthYear}
            />
          </Grid>

          <Grid item xs={12} className="divider">
            <FormLabel>Localização</FormLabel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cidade"
              placeholder="Digite sua cidade"
              value={formik.values.city}
              onChange={formik.handleChange}
              variant="outlined"
              id="city"
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Estado"
              placeholder="Digite seu estado"
              value={formik.values.state}
              onChange={formik.handleChange}
              variant="outlined"
              id="state"
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
         
          <Grid item xs={12} className="divider">
            <FormLabel>Nº de Telefone</FormLabel>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              fullWidth
              label="DDD"
              placeholder="Digite seu DDD"
              value={formik.values.ddd}
              onChange={formik.handleChange}
              variant="outlined"
              id="ddd"
              error={formik.touched.ddd && Boolean(formik.errors.ddd)}
              helperText={formik.touched.ddd && formik.errors.ddd}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <TextField
              fullWidth
              label="Telefone"
              placeholder="Digite seu telefone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              variant="outlined"
              id="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} className="divider">
            <FormLabel>Dados de Acesso</FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome de usuário"
              placeholder="Escolha um nome de usuário"
              value={formik.values.user}
              onChange={formik.handleChange}
              variant="outlined"
              id="user"
              error={formik.touched.user && Boolean(formik.errors.user)}
              helperText={formik.touched.user && formik.errors.user}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Senha"
              placeholder="Escolha uma senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              variant="outlined"
              id="password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Confirme sua Senha"
              placeholder="Confirme sua senha"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
              variant="outlined"
              id="passwordConfirm"
              error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
              helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            />
            <p>
              Use 8 ou mais caracteres com uma mistura de letras, números e
              símbolos.Não deve conter seu nome ou nome de usuário.
            </p>
          </Grid>
          {/* <BoxForm>
              <h1>Adicione aqui sua foto de perfil</h1>
              <input type="file" accept="image/*" onChange={(event) => setProfilePic(event.target.files[0])}/>
            </BoxForm> */}
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
            <FormHelperText error>{formik.errors.termsAccepted}</FormHelperText>
          </Grid>

          <Grid item xs={12}>
           <ThetaButton as="button" type="submit" theme="purple" fullWidth >{loading ? <BarLoader color="white"/> : 'Cadastrar'}</ThetaButton>
          </Grid>
        </Grid>
        
      </form>
    </Container>
  );
};

export default UserSignUpForm;
