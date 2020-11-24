import React, { useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";
import { Container, Grid } from "@material-ui/core";
import {
  BigMediaBox,
  Box,
  MidiaBox,
  MidiaBox2,
} from "../styles/components/Box";
import {
  Quote,
  Title,
  Text,
  Subtitle,
  ColoredTitle,
  Heading06,
  GrayTitle,
} from "../styles/components/Typography";
import MinusSvgIcon from "../components/icons/MinusSvgIcon";
import PlusSvgIcon from "../components/icons/PlusSvgIcon";
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
  CTA,
  PriceBlock,
  PodcastWrapper,
  PurpleSection,
} from "../styles/pages/Home";
import { useScroll } from "../utils/hooks/useScroll";
import CustomCarousel from "../components/general/CustomCarousel";
import { blog } from "../utils/constant/blog";
import interfaceConstant from "../utils/constant/interfaceConstant";
import theme from "../styles/theme";
import CalendarSvgIcon from "../components/icons/CalendarSvgIcon";
import { Tag } from "../styles/components/Tag";
import CalendarV2SvgIcon from "../components/icons/CalendarV2SvgIcon";
import { podcasts } from "../utils/constant/podcast";
import PlaySvgIcon from "../components/icons/PlaySvgIcon";

import Footer from "../components/layout/Footer";
import Link from "next/link";

export default function HomePage({ deviceType }) {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showOurPorpouse, setShowOurPorpouse] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      window.location.href = "/busca-profissionais";
    }
  }, []);

  return (
    <HomeWrapper>
      <Header
        color={scrollY <= 200 ? "light" : "dark"}
        elevation={scrollY <= 200 ? 0 : 3}
      />
      <Intro>
        <div className="uplayer">
          <img src="/media/home/capa-logo.svg" alt="Logo" />
          <h4>Plataforma online de atendimento Thetahealing®</h4>
          <ColoredTitle>Conectados pela cura</ColoredTitle>
          <Link passHref href="/suporte/conheca">
            <ThetaButton theme="rainbow">Conheça</ThetaButton>
          </Link>
          <Navigation alt="Navigation" src="/media/home/arrow.svg" />
        </div>
      </Intro>
      <Divider height="50px" />
      <CenteredImage alt="Navigation" src="/media/home/1.svg" />
      <Divider height="120px" />

      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Title>Sobre Nós</Title>
            <Text>
              Utilizando a terapia holística-quântica chamada Thetahealing®,
              este website abre mais um canal, uma fonte para seu
              auto-conhecimento e cura. Nossa comunidade de terapeutas
              thetahealers preparam-se constantemente para auxiliar você que
              busca uma vida mais feliz, tranquila, confiante, saudável e
              abundante.
            </Text>

            <Text>
              Todos os profissionais aqui cadastrados são certificados
              internacionalmente pelo Instituto THInK e seus diplomas anexados
              aos seus perfis pessoais. Isso significa que você está no local
              certo se deseja conhecer e ser tratado com a verdadeira técnica
              Thetahealing®.
              <span
                onClick={() => setShowAboutUs(!showAboutUs)}
                className="navigation"
                style={{ marginLeft: 10 }}
              >
                {showAboutUs ? "ver menos" : "ver mais"}
              </span>
            </Text>

            {showAboutUs && (
              <Text>
                A plataforma ThetaBrasil.online é destinada para atendimento
                somente no formato online, onde toda experiência será realizada
                de forma segura e protegida. Ver você feliz é nosso objetivo.
                Permita-se viver sem sofrimento, culpa, ressentimentos ou
                limitações. Você merece! Lembre-se de que você têm o livre
                arbítrio de escolha - faça da sua caminhada uma jornada de luz
                com a ajuda do Thetahealing®.
              </Text>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Title>E nosso Propósito</Title>
            <Text>
              Por meio desta plataforma de atendimento online, desejamos
              desmistificar alguns préconceitos sobre o Thetahealing®, pois
              estamos convictos da sua eficácia e benefícios reais. Não somos
              curandeiros, mas o desejo da curar nos move. Somos curadores de
              alma. Queremos ajudar pessoas pois essa é a nosso propósito. E o
              Thetahealing® é nossa ferramenta de trabalho.
            </Text>

            <Text>
              Decidimos trabalhar de forma solidária, cobrando um valor abaixo
              do praticado no mercado e doando 10 por cento de toda receita para
              projetos sociais cadastrados.
              <span
                onClick={() => setShowOurPorpouse(!showOurPorpouse)}
                className="navigation"
                style={{ marginLeft: 10 }}
              >
                {showOurPorpouse ? "ver menos" : "ver mais"}
              </span>
            </Text>

            {showOurPorpouse && (
              <Text>
                Solidariedade, seriedade, compromisso, honestidade e ética
                profissional são virtudes que nos guiam nesta caminhada. Por
                meio do trabalho voluntário de cura Thetahealing®, queremos
                causar um real impacto positivo na sociedade. A compaixão é um
                sentimento pulsante no coração de todo curador e no
                ThetaBrasil.online, exercemos nossa contribuição para o Todo em
                agradecimento pela evolução espiritual, possibilitada através do
                conhecimento da técnica Thetahealing®.
              </Text>
            )}
          </Grid>

          <Divider height="60px" />

          <Grid item xs={12} sm={12} md={6}>
            <CenteredImage maxWidth="60%" src="/media/home/2.svg" />
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
        <Container maxWidth="lg">
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
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={5}>
              <SubContainer>
                <CenteredImage maxWidth="70%" src="/media/home/4.svg" />
              </SubContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={7} className="text-right">
              <Title>Sobre o THInK</Title>
              <Text color={colors.gray03}>
                O Instituto de Conhecimento Thetahealing® (Thetahealing
                Institute of Knowledge) foi criado pela própria desenvolvedora
                da técnica para ser a casa do thetahealing. É por meio dele que
                instrutores do mundo todo são treinados e acreditados. Somente
                os certificados emitidos por esta escola validam o terapeuta
                como thetahealer. O THInK publica atualmente livros sobre
                Thetahealing em 21 idiomas e já capacitaram terapeutas em 152
                países distintos.
              </Text>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container maxWidth="lg">
        <Divider height="120px" />
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} className="text-center">
            <Divider height="20px" />
            <Subtitle>
              Thetahealing® não é uma religião; é uma técnica para mudar crenças
              de acordo com o que você deseja.
            </Subtitle>
            <Text color={colors.gray03} small>
              (tradução do texto publicado na página oficial do THInK, em
              inglês)
            </Text>
          </Grid>
        </Grid>

        <Divider height="60px" />
      </Container>
      <section className="gray01">
        <Divider height="40px" />
        <Container maxWidth="lg">
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
             <Link passHref href="/busca-profissionais">
              <Box className="box-link">
                <div className="avatar">
                  <CenteredImage src="/media/home/6.svg" alt="" />
                </div>
                <Heading06>Escolha seu Terapeuta</Heading06>
                <Text color={colors.gray03}>
                  Clique aqui e navegue nos perfis dos profissionais
                  cadastrados.
                </Text>
              </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
            <Link passHref href="/agendamento-por-horario">
              <Box className="box-link">
                <div className="avatar">
                  <CenteredImage src="/media/home/7.svg" alt="" />
                </div>
                <Heading06>Agende o horário</Heading06>
                <Text color={colors.gray03}>
                  Você pode filtrar por data e hora. Clique aqui para agendar seu horário.
                </Text>
              </Box>
              </Link>
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
                  Faça o login ou clique no link recebido pelo email para
                  iniciar sua consulta.
                </Text>
              </Box>
            </Grid>
          </Grid>
          <Divider height="30px" />
          <Grid container>
            <Grid item md={6}>
              <Text color={colors.gray03} size="1.3rem">
                Consultas a partir de
              </Text>
              <PriceBlock>
                <span>RS</span>
                <p>107,00</p>
              </PriceBlock>
              <Link passHref href="/agendamento-por-horario">
                <ThetaButton theme="purple">Agenda Online</ThetaButton>
              </Link>
            </Grid>
            <Grid item md={6} className="text-right">
              <BenefitsList>
                <li>Agendamento rápido e fácil</li>
                <li>Valor consulta mais acessível</li>
                <li>Informações sobre o mundo da cura ThetaHealing®</li>
                <li>Histórico pessoal de agendamento e consultas</li>
                <li>Terapeutas Qualificados</li>
              </BenefitsList>
            </Grid>
          </Grid>
          <Divider height="30px" />
        </Container>
      </section>
      <Container maxWidth="lg">
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
            <Link passHref href="/projetos-assistidos">
              <ThetaButton theme="purple">Projetos Assistidos</ThetaButton>
            </Link>
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
          <Link passHref href="/cadastro-terapeuta">
            <ThetaButton theme="purple">Cadastre-se</ThetaButton>
          </Link>
        </div>
      </CTA>
      {/*   <Container maxWidth="lg">
        <GrayTitle>
          Theta<strong>Voice</strong>
        </GrayTitle>
        <Divider height="30px" />
        <CustomCarousel
          deviceType={deviceType}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 60,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 50,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {blog.map((item: interfaceConstant.blogProps, index: number) => (
            <MidiaBox key={index}>
              <img src={item.image} alt={item.description} />
              <div className="content">
                <span>{item.type}</span>
                <p>{item.description}</p>
                <footer>
                  <Tag color="white" bg={theme.palette.primary.main}>
                    {item.tag}
                  </Tag>
                  <span>
                    <CalendarSvgIcon
                      width="15"
                      height="15"
                      fillColor={theme.palette.primary.main}
                    />
                    {item.data}
                  </span>
                </footer>
              </div>
            </MidiaBox>
          ))}
        </CustomCarousel>
        <Divider height="50px" />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <BigMediaBox bg="/media/home/bg-01.jpg">
              <h3>
                Perder tempo em aprender coisas que não interessam, priva-nos de
                descobrir coisas interessantes.
              </h3>
              <footer>
                <Tag bg="white" color={theme.palette.primary.main}>
                  Tag#1
                </Tag>
                <span>
                  <CalendarV2SvgIcon fillColor="white" width="15" height="14" />{" "}
                  25 de Agosto de 2020
                </span>
              </footer>
            </BigMediaBox>
          </Grid>
        </Grid>
        <Divider height="50px" />
      </Container>
       */}
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Link passHref href="https://www.instagram.com/thetabrasilonline/" >
              <MidiaBox2 className="box-link">
                <img src="/media/midia/insta.png" alt="ok" />
              </MidiaBox2>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Link passHref href="https://www.facebook.com/ThetaBrasil.online">
              <MidiaBox2 className="box-link">
                <img src="/media/midia/face.png" alt="ok" />
              </MidiaBox2>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Link passHref href="https://www.youtube.com/channel/UCfoneG8D-xP9dZyq2607D3w">
              <MidiaBox2 className="box-link">
                <img src="/media/midia/youtube.png" alt="ok" />
              </MidiaBox2>
            </Link>
          </Grid>

        </Grid>
      </Container>
     {/*  <Container maxWidth="lg">
        <Divider height="60px" />
        <GrayTitle>Podcasts & Playlists</GrayTitle>
        <Divider height="30px" />
        <CustomCarousel
          deviceType={deviceType}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 0,
            },
          }}
        >
          {podcasts.map(
            (item: interfaceConstant.podcastProps, index: number) => (
              <PodcastWrapper
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={7} lg={7}>
                    <img src="/media/home/botao-spotify.png" alt="spotify" />
                    <div className="content">
                      <ColorfulIcon>
                        <PlaySvgIcon width="12" height="15" fillColor="white" />
                      </ColorfulIcon>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img src={item.img} alt="imagem" />
                  </Grid>
                </Grid>
              </PodcastWrapper>
            )
          )}
        </CustomCarousel>
        <Divider height="60px" />
      </Container> */}
      <PurpleSection>
        <img src="/media/home/mandala.png" width="133" height="130" />
        <p>
          Somos Curadores
          <br />
          Curamos com Luz
          <br />
          Luz do nosso amor
          <br />
          Toda compaixão <br />
          Virou ação de amor <br />
          Luz para curar <br />
          Evoco das estrelas
          <br />
          Vem da natureza
          <br />
          Do centro da Terra
          <br />
          De todo o Universo
          <br />
          Cura a Mãe Terra
          <br />
          E todas as plantas
          <br />
          E todas as pedras
          <br />
          Todos os animais
          <br />
        </p>
        <p>
          Os elementais
          <br />
          Todos os espíritos <br />
          os mortos e os vivos <br />
          os ¨intras¨ e os ¨extras¨ <br />
          Toda a humanidade <br />
          toda a natureza <br />
          Cura a Mãe Terra <br />
          Vem de todo Universo <br />
          Espalhando a sua Luz <br />
          Luz que chega á terra
          <br />
          Cura toda a natureza <br />
          Despertando a Humanidade <br />
          Curando todo o Planeta
          <br />
        </p>
      </PurpleSection>
      <Footer />
    </HomeWrapper>
  );
}
HomePage.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser().setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
