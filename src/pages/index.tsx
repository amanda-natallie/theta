import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Box } from "../components/general/Box";
import {
  Quote,
  Title,
  Text,
  Subtitle,
  ColoredTitle,
  Heading06,
} from "../components/general/Typography";
import MinusSvgIcon from "../components/icons/MinusSvgIcon";
import Header from "../components/layout/Header";
import { colors } from "../styles/colors";
import { ColorfulIcon, ThetaButton } from "../styles/components/Button";
import { Divider } from "../styles/components/Divider";
import {
  CenteredImage,
  IconTitle,
  Intro,
  Navigation,
  HomeWrapper,
  SubContainer,
  BenefitsList,
  CTA
} from "../styles/pages/Home";
import { useScroll } from "../utils/hooks/useScroll";

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <HomeWrapper>
      <Header color={scrollY <= 200 ? "light" : "dark"} />
      <Intro>
        <div className="uplayer">
          <img src="/media/home/capa-logo.svg" alt="Logo" />
          <h4>Plataforma online de atendimento Thetahealing®</h4>
          <ColoredTitle>Conectados pela cura</ColoredTitle>
          <ThetaButton theme="rainbow">Conheça</ThetaButton>
          <Navigation alt="Navigation" src="/media/home/arrow.svg" />
        </div>
      </Intro>
      <Divider height="50px" />
      <CenteredImage alt="Navigation" src="/media/home/1.svg" />
      <Divider height="120px" />

      <Container maxWidth="md">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <IconTitle>
              <ColorfulIcon>
                <MinusSvgIcon width="15" fillColor="white" />
              </ColorfulIcon>
              <Title>Sobre Nós</Title>
            </IconTitle>

            <Text>
              Construído com o objetivo de disseminar a cura através do
              Thetahealing®, este website aproxima aqueles que já praticam a
              técnica como terapeutas das pessoas que buscam auxílio para sua
              evolução pessoal.
            </Text>

            <Text>
              Todos os profissionais aqui cadastrados são certificados
              internacionalmente pelo Instituto THInK, uma vez que foram
              capacitados por instrutores acreditados pela própria
              desenvolvedora da técnica Thetahealing®, Vianna Stibal. Além da
              certificação, nossos thetahealers participam constantemente de
              cursos de reciclagem junto aos mentores da plataforma, que são
              extremamente qualificados para o desenvolvimento profissional do
              grupo – tudo para que você tenha a melhor experiência possível!
            </Text>

            <Text>
              Entendendo o grande potencial curativo desta ferramenta, os
              terapeutas do ThetaBrasil.online atendem de forma solidária, ou
              seja, cobrando preços abaixo do praticado no mercado, porém com a
              mesma qualidade e eficiência do serviço prestado em outros canais.
              Assim, desejamos abrir portas para que você possa experimentar
              esta incrível ferramenta de cura com total segurança,
              credibilidade e profissionalismo.{" "}
            </Text>
            <Text>
              Permita-se ter uma vida sem sofrimento, culpa, limitações ou
              desequilíbrio. Lembre-se: você têm o livre arbítrio de escolha,
              portanto faça da sua caminhada uma jornada de luz, com a ajuda do
              Thetahealing®. Conheça nossos terapeutas e agende sua consulta.
            </Text>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <IconTitle>
              <ColorfulIcon>
                <MinusSvgIcon width="15" fillColor="white" />
              </ColorfulIcon>
              <Title>E nosso Propósito</Title>
            </IconTitle>
            <Text>
              Construído com o objetivo de disseminar a cura através do
              Thetahealing®, este website aproxima aqueles que já praticam a
              técnica como terapeutas das pessoas que buscam auxílio para sua
              evolução pessoal.
            </Text>

            <Text>
              Todos os profissionais aqui cadastrados são certificados
              internacionalmente pelo Instituto THInK, uma vez que foram
              capacitados por instrutores acreditados pela própria
              desenvolvedora da técnica Thetahealing®, Vianna Stibal. Além da
              certificação, nossos thetahealers participam constantemente de
              cursos de reciclagem junto aos mentores da plataforma, que são
              extremamente qualificados para o desenvolvimento profissional do
              grupo – tudo para que você tenha a melhor experiência possível!
            </Text>

            <Text>
              Entendendo o grande potencial curativo desta ferramenta, os
              terapeutas do ThetaBrasil.online atendem de forma solidária, ou
              seja, cobrando preços abaixo do praticado no mercado, porém com a
              mesma qualidade e eficiência do serviço prestado em outros canais.
              Assim, desejamos abrir portas para que você possa experimentar
              esta incrível ferramenta de cura com total segurança,
              credibilidade e profissionalismo.{" "}
            </Text>
            <Text>
              Permita-se ter uma vida sem sofrimento, culpa, limitações ou
              desequilíbrio. Lembre-se: você têm o livre arbítrio de escolha,
              portanto faça da sua caminhada uma jornada de luz, com a ajuda do
              Thetahealing®. Conheça nossos terapeutas e agende sua consulta.
            </Text>
          </Grid>

          <Divider height="60px" />

          <Grid item xs={12} sm={12} md={6}>
            <CenteredImage maxWidth="90%" src="/media/home/2.svg" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="text-right">
            <Title>
              Comprometidos exclusivamente com a técnica Thetahealing®
            </Title>
            <Quote>Vianna Stibal (Instituto THInK)</Quote>
            <Text weight={800} color={colors.gray03}>
              Todos os terapeutas utilizam somente esta ferramenta durante suas
              consultas, mesmo que sejam habilitados em outras técnicas.
            </Text>
          </Grid>
          <Divider height="60px" />
        </Grid>
      </Container>
      <section className="purple01">
        <Container maxWidth="md">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={7}>
              <Title>A meditação Thetahealing®</Title>

              <Text>
                Por meio de uma meditação focada, os praticantes Thetahealing®
                atingem a frequência teta (4-7Hz), também chamada de “estado
                mental divino”, onde as ondas cerebrais ativam poderes de cura
                impressionantes, como acesso à memórias, aprendizagem acelerada,
                criatividade e limpeza de comportamentos repetitivos.
              </Text>
              <Text>
                Digging (escavação), ativação do DNA, downloads de sentimentos,
                limpeza e realinhamento energéticos, quebra de padrões e
                sentimentos negativos (crenças limitantes), divórcio energético,
                manifestação da alma-gêmea e envio de amor incondicional, são
                alguns exemplos de procedimentos que podem ser realizados em uma
                consulta. Cada um deles é destinado à um tipo de trabalho no
                processo de auto-conhecimento e cura.
              </Text>
              <Text>
                Você nasceu para a felicidade plena. Torne-se livre com o
                auxílio do Thetahealing® e assuma seu o papel de co-criador da
                própria realidade, capaz de manifestar uma vida mais realizada e
                ancorada no amor incondicional do Criador de Tudo que É.
              </Text>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <SubContainer>
                <CenteredImage maxWidth="90%" src="/media/home/3.svg" />
              </SubContainer>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container maxWidth="md">
        <Divider height="120px" />
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={5}>
            <SubContainer>
              <CenteredImage maxWidth="70%" src="/media/home/4.svg" />
            </SubContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={7} className="text-right">
            <Title>Sobre o THInK</Title>
            <Text color={colors.gray03}>
              O Instituto de Conhecimento Thetahealing® (Thetahealing Institute
              of Knowledge) foi criado pela própria desenvolvedora da técnica
              para ser a casa do thetahealing. É por meio dele que instrutores
              do mundo todo são treinados e acreditados. Somente os certificados
              emitidos por esta escola validam o terapeuta como thetahealer. O
              THInK publica atualmente livros sobre Thetahealing em 21 idiomas e
              já capacitaram terapeutas em 152 países distintos.
            </Text>
            <Text>
              Se você busca por respostas, Thetahealing te ajuda a obtê-las.
            </Text>
            <Divider height="20px" />
            <Subtitle>
              Thetahealing® não é uma religião; é uma técnica para mudar crenças
              de acordo com o que você deseja.
            </Subtitle>
            <Text color={colors.gray03} small>
              (tradução do texto publicado na página oficial do THInK, em
              inglês)
            </Text>
            <BenefitsList>
              <li>Agendamento rápido e fácil</li>
              <li>Valor consulta mais acessível</li>
              <li>Informações sobre o mundo da cura ThetaHealing®</li>
              <li>Histórico pessoal de agendamento e consultas</li>
              <li>Terapeutas Qualificados</li>
            </BenefitsList>
          </Grid>
        </Grid>
        <Divider height="60px" />
      </Container>
      <section className="gray01">
      <Divider height="40px" />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} className="text-center">
            <ColoredTitle as="h2" small>
              Atendimento Online
            </ColoredTitle>
            <Divider height="40px" />
            <CenteredImage src="/media/home/5.svg" alt="" />
            <Divider height="40px" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <div className="avatar">
                <CenteredImage src="/media/home/6.svg" alt="" />
              </div>
              <Heading06>Escolha seu Terapeuta</Heading06>
              <Text color={colors.gray03}>
                Clique no botão abaixo e navegue nos perfis dos profissionais
                cadastrados.
              </Text>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <div className="avatar">
                <CenteredImage src="/media/home/7.svg" alt="" />
              </div>
              <Heading06>Agende o horário</Heading06>
              <Text color={colors.gray03}>
                Você pode filtrar por nome, localização, data, hora ou
                certificação Thetahealing®.
              </Text>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <div className="avatar">
                <CenteredImage src="/media/home/8.svg" alt="" />
              </div>
              <Heading06>Realize o pagamento</Heading06>
              <Text color={colors.gray03}>
                Forma de pagamento descomplicada, rápida e segura. Aceitamos
                cartões de crédito e débito
              </Text>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box>
              <div className="avatar">
                <CenteredImage src="/media/home/9.svg" alt="" />
              </div>
              <Heading06>Acesse sua sala</Heading06>
              <Text color={colors.gray03}>
                Faça o login ou clique no link recebido pelo email para iniciar
                sua consulta.
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider height="90px" />
      </section>
      <Container maxWidth="md">
        <Divider height="90px" />

        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Title>Somos UM</Title>
            <Text color={colors.gray03}>
              Sabemos que é grande a lista de curas holísticas (ou alternativas)
              conhecidas atualmente. Temos convicção do importante lugar que o
              Thetahealing® ocupa nesta lista, como um aliado poderosíssimo na
              transformação e evolução pessoal da humanidade.
            </Text>

            <Text color={colors.gray03}>
              Como thetahealers, praticantes da técnica Thetahealing®, um
              chamado nos une:{" "}
              <span className="grayspan">contribuir com a cura do Todo.</span>
            </Text>
            <Divider height="30px" />
            <ThetaButton theme="purple">Projetos Assistidos</ThetaButton>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SubContainer>
              <CenteredImage maxWidth="100%" src="/media/home/10.svg" alt="" />
            </SubContainer>
          </Grid>
        </Grid>
      </Container>
      <CTA>
        <div className="inner">
          <Title>Você é um ThetaHealer?</Title>
          <ThetaButton theme="purple">
            Cadastre-se
          </ThetaButton>
        </div>
      </CTA>
    </HomeWrapper>
  );
}
