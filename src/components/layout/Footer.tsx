import React, { memo } from "react";
import { Container, Grid } from "@material-ui/core";
import Link from "next/link";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { Copyright, FooterMenu, FooterWrapper, SocialMenu } from "../../styles/components/Footer";
import ThetaIconSvgIcon from "../icons/ThetaIconSvgIcon";
import { NewsletterButton } from "../../styles/components/Button";
import { Divider } from "../../styles/components/Divider";
import YoutubeSvgIcon from "../icons/YoutubeSvgIcon";
import FacebookSvgIcon from "../icons/FacebookSvgIcon";
import InstagramSvgIcon from "../icons/InstagramSvgIcon";
import SpotifySvgIcon from "../icons/SpotifySvgIcon";
import { colors } from "../../styles/colors";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <div className="brand">
          <ThetaIconSvgIcon width="47" height="49" />
          <p>
            Você possui o livre arbítrio de escolha. Faça da sua caminhada uma
            jornada de luz com a ajuda do Thetahealing®️
          </p>
        </div>

        <div className="news">
          <p>Assine nossa newsletter</p>
          <form action="">
            <input type="text" placeholder="Insira seu e-mail" />
            <Link  passHref href="/">
              <NewsletterButton>Assinar</NewsletterButton>
            </Link>
          </form>
        </div>
      </Container>
      <Divider height="90px" />
      <Container maxWidth="lg" >
        <Grid container spacing={10} style={{flexDirection:"column"}}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
        <FooterMenu>
          <Link href="#" >Home</Link>
          <Link href="#" >Contato</Link>
          <Link href="/suporte" >Suporte</Link>
          <Link href="#" >Notícias</Link>
          <Link href="#" >Projetos Assistidos</Link>
        </FooterMenu>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <SocialMenu>
          <Link href="https://www.youtube.com/channel/UCfoneG8D-xP9dZyq2607D3w" ><img src="/media/home/19.svg" alt="youtube"/></Link>
          <Link href="https://www.facebook.com/ThetaBrasil.online" ><img src="/media/home/18.svg" alt="facebook"/></Link>
          <Link href="https://www.instagram.com/thetabrasilonline/" ><img src="/media/home/17.svg" alt="instagram"/></Link>
          <Link href="#" ><img src="/media/home/16.svg" alt="spotify"/></Link>
          <Link href="#" ><img src="/media/home/14.svg" alt="spotify"/></Link>
          <Link href="#" ><img src="/media/home/15.svg" alt="spotify"/></Link>
        </SocialMenu>
        <Copyright>Copyright ©2020 Theta Brasil Terapia Online | CNPJ 38.166.672/0001-44. Todos os direitos reservados </Copyright>

        </Grid>
        </Grid>

      </Container>
    </FooterWrapper>
  );
};

export default memo(Footer);
