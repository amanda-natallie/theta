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
import ListStyle  from "../../styles/components/listStyle"
import { useDispatch } from "react-redux";
import { handleUserData } from "../../store/actions/UserActions";
import { ThetaButton } from "../../styles/components/Button";
import Link from "next/link";

const ThetaSignUpForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name:"",
      CPF:"",
      email: "",
      state: "",
      city: "",
      phone: undefined,
      ddd: undefined,
      certificate: "",
      firstName: "",
      lastName: "",
      
    },
    validationSchema: Yup.object().shape({
      /* nome:Yup.string().required("Obrigatório"),
      firstName: Yup.string().required("Obrigatório"),
      lastName: Yup.string().required("Obrigatório"),
      CPF: Yup.string().required("Obrigatório"),
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
      termsAccepted: Yup.boolean().required("Obrigatório"), */
    }),
    onSubmit: (values: any) => {
      //
    },
  });

  return (
    <Container maxWidth="sm" className="form signup-form">
      <Title>Você é Thetahealer? </Title>
      <ListStyle>
      <p>Se você aceitar o chamado de colaborar com a cura do Todo através do 
        ThetaBrasil.online, honrará o compromisso de curar-se para poder curar o outro. 
        Se comprometerá, com seriedade e disciplina, com seu auto-desenvolvimento no Thetahealing. 
        Respeitará cada cliente assistido e reconhecerá a divindade que habita ser deste universo. </p>
        <p>À nossa equipe de thetahealers, oferecemos:</p>
        
        <ul>
          <li><b>Apoio técnico, emocional e energético</b> para desenvolver-se na carreira;</li>
          <li><b>Divulgação como terapeuta e voluntário,</b> em registros e comunicações internas e externas;</li>
          <li><b>Página pessoal interativa</b> dentro da plataforma para <b>divulgação do trabalho individual,</b> com total transparência de informação;</li>
          <li>Aproximação de demais terapeutas para <b>networking;</b></li>
          <li><b>Conhecimento aprofundado</b> sobre a carreira profissional de Thetahealer;</li>
          <li><b>Capacitação e vivências em Thetahealing:</b> workshops, mini-cursos personalizados, 
            grupos de estudo e meetings são exemplos de eventos de capacitação técnica promovidos 
            por nossos instrutores certificados pelo THInK -totalmente grátis!</li>
          <li><b>Uma fonte de renda extra:</b> tanto para terapeutas iniciantes como para profissionais renomados;</li>
          <li>Atendimento livre, <b>conforme agenda disponível</b>, sem restrições</li>
          <li>Uma <b>plataforma segura</b>, desenvolvida com a mais <b>nova tecnologia</b>, 
            e <b>engajada</b> com público-alvo através de um extensivo trabalho de <b>divulgação em mídias digitais;</b></li>
          <li>Um local para que você desenvolva um <b>trabalho voluntário significativo;</b></li>
          <li>Validação da sua <b>capacitação como terapeuta na técnica Thetahealing</b>, em todo Brasil.</li>
        </ul>
        </ListStyle>
        
      <Title>Faça parte deste projeto!</Title>
      
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="Nome"
              placeholder="Insira seu nome"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("name", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
            />
          </Grid>
         
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              label="CPF"
              placeholder="Insira seu CPF"
              value={formik.values.CPF}
              onBlur={formik.handleBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                formik.setFieldValue("CPF", event.target.value, true);
              }}
              variant="outlined"
              helperText={
                formik.touched.CPF && formik.errors.CPF
                  ? formik.errors.CPF
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
         
         
         

          
        
          

          <Grid item xs={12}>
            <ThetaButton as="button" onClick={undefined} theme="purple" fullWidth >Cadastrar</ThetaButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ThetaSignUpForm;
