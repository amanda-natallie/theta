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
import ListStyle from "../../styles/components/listStyle";
import { useDispatch } from "react-redux";
import { handleUserData } from "../../store/actions/UserActions";
import { ThetaButton } from "../../styles/components/Button";
import Link from "next/link";
import { userRegistration } from "../../services/profissionals";
import { FormatAlignJustify } from "@material-ui/icons";
import { BoxForm } from "../../styles/components/Box";

const ThetaSignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
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
      birthMonth: Yup.number().required("Obrigatório"),
      birthYear: Yup.number().required("Obrigatório"),
      city: Yup.string().required("Obrigatório"),
      state: Yup.string().required("Obrigatório"),
      phone: Yup.string().required("Obrigatório"),
      user: Yup.string().required("Obrigatório"),
      password: Yup.string().required("Obrigatório"),
      passwordConfirm: Yup.string()
        .required("Obrigatório")
        .oneOf([Yup.ref("password"), null], "As senhas não combinam"),
      termsAccepted: Yup.boolean().required("Obrigatório"),
    }),
    onSubmit: (values: any) => {
      userRegistration({
        typeUser: "therapist",
        name: values.firstName,
        lastName: values.lastName,
        email: values.email,
        email_confirmation: values.emailConfirm,
        dayBorn: values.birthDay.toString(),
        monthBorn: values.birthMonth.toString(),
        yearBorn: values.birthYear.toString(),
        state: values.state,
        city: values.city,
        phone: `(${values.ddd}) ${values.phone}`,
        username: values.user,
        password: values.password,
        password_confirmation: values.passwordConfirm,
        languages: [],
        links: [],
        certificates: [],
      });
    },
  });

  return (
    <Container maxWidth="sm" className="form signup-form">
      <Title>Você é Thetahealer? </Title>
      <ListStyle>
        <p>
          Se você aceitar o chamado de colaborar com a cura do Todo através do
          ThetaBrasil.online, honrará o compromisso de curar-se para poder curar
          o outro. Se comprometerá, com seriedade e disciplina, com seu
          auto-desenvolvimento no Thetahealing. Respeitará cada cliente
          assistido e reconhecerá a divindade que habita ser deste universo.{" "}
        </p>
        <p>À nossa equipe de thetahealers, oferecemos:</p>

        <ul>
          <li>
            <b>Apoio técnico, emocional e energético</b> para desenvolver-se na
            carreira;
          </li>
          <li>
            <b>Divulgação como terapeuta e voluntário,</b> em registros e
            comunicações internas e externas;
          </li>
          <li>
            <b>Página pessoal interativa</b> dentro da plataforma para{" "}
            <b>divulgação do trabalho individual,</b> com total transparência de
            informação;
          </li>
          <li>
            Aproximação de demais terapeutas para <b>networking;</b>
          </li>
          <li>
            <b>Conhecimento aprofundado</b> sobre a carreira profissional de
            Thetahealer;
          </li>
          <li>
            <b>Capacitação e vivências em Thetahealing:</b> workshops,
            mini-cursos personalizados, grupos de estudo e meetings são exemplos
            de eventos de capacitação técnica promovidos por nossos instrutores
            certificados pelo THInK -totalmente grátis!
          </li>
          <li>
            <b>Uma fonte de renda extra:</b> tanto para terapeutas iniciantes
            como para profissionais renomados;
          </li>
          <li>
            Atendimento livre, <b>conforme agenda disponível</b>, sem restrições
          </li>
          <li>
            Uma <b>plataforma segura</b>, desenvolvida com a mais{" "}
            <b>nova tecnologia</b>, e <b>engajada</b> com público-alvo através
            de um extensivo trabalho de <b>divulgação em mídias digitais;</b>
          </li>
          <li>
            Um local para que você desenvolva um{" "}
            <b>trabalho voluntário significativo;</b>
          </li>
          <li>
            Validação da sua{" "}
            <b>capacitação como terapeuta na técnica Thetahealing</b>, em todo
            Brasil.
          </li>
        </ul>
      </ListStyle>

      <Title>Faça parte deste projeto!</Title>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="divider">
            <FormLabel>Identificação</FormLabel>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              fullWidth
              error={false}
              label="Nome"
              placeholder="Insira seu nome"
              variant="outlined"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("name", event.target.value, true);
              }}
              helperText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
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
            <FormLabel>Localização</FormLabel>
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
          <Grid item xs={12} className="divider">
            <FormLabel>Certificados</FormLabel>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="Certificados emitidos pelo instituto THInk"
              placeholder="Insira seu link"
              value={formik.values.certificate}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("certificado", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.certificate && formik.errors.certificate
                  ? formik.errors.certificate
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
          <Grid item xs={12}>
            <h1>Sou fluente em:</h1>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Inglês"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Mandarin"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Espanhol"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Hindi"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Árabe"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Português"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Bengali"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Russo"
            />

            <Grid container xs={12} style={{ justifyContent: "flex-end" }}>
              <ThetaButton type="button" theme="purple">
                Adicionar
              </ThetaButton>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              style={{ margin: "12px" }}
              container
              direction="row"
              alignItems="center"
            >
              <Grid style={{ marginRight: "12px" }} item>
                <img src="media/icons/social-media/youtube.svg" />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth placeholder="https://www.youtube.com/" />
              </Grid>
            </Grid>

            <Grid
              style={{ margin: "12px" }}
              container
              xs={12}
              direction="row"
              alignItems="center"
            >
              <Grid style={{ marginRight: "12px" }} item>
                <img src="media/icons/social-media/twitter.svg" />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth placeholder="https://www.twitter.com/" />
              </Grid>
            </Grid>

            <Grid
              style={{ margin: "12px" }}
              container
              xs={12}
              direction="row"
              alignItems="center"
            >
              <Grid style={{ marginRight: "12px" }} item>
                <img src="media/icons/social-media/facebook.svg" />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth placeholder="https://www.facebook.com/" />
              </Grid>
            </Grid>

            <Grid
              style={{ margin: "12px" }}
              container
              xs={12}
              direction="row"
              alignItems="center"
            >
              <Grid style={{ marginRight: "12px" }} item>
                <img src="media/icons/social-media/instagram.svg" />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth placeholder="https://www.instagram.com/" />
              </Grid>
            </Grid>

            <Grid
              style={{ margin: "12px" }}
              container
              xs={12}
              direction="row"
              alignItems="center"
            >
              <Grid style={{ marginRight: "12px" }} item>
                <img src="media/icons/social-media/linkedin.svg" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  placeholder="https://www.linkedin.com/in"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ justifyContent: "flex-end" }}>
            <ThetaButton type="button" theme="purple">
              Adicionar
            </ThetaButton>
          </Grid>
          <Grid container xs={12}>
            <BoxForm>
              <h1>Faça upload dos seus diplomas</h1>
              <input type="file" />
            </BoxForm>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={8}
                label="Quer acrescentar algo a mais? Digite aqui"
              />
            </Grid>

            <BoxForm>
              <h1>Adicione suas fotos aqui para seu perfil de terapeuta</h1>
              <input type="file" />
            </BoxForm>
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
            <ThetaButton
              as="button"
              onClick={() => formik.submitForm()}
              theme="purple"
              fullWidth
            >
              Cadastrar
            </ThetaButton>
            <Grid item xs={12}>
              <h1>
                A Theta Brasil coleta e usa dados pessoais em conformidade com
                nossa Política de Privacidade. Ao criar uma conta, você concorda
                com nossos Termos e Condições.
              </h1>
            </Grid>
            <Grid item xs={12}>
              <img src="media/icons/analises.svg" alt="" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ThetaSignUpForm;
