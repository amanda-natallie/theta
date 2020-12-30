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
      <div className="newResponse">
        <div className="brand">
          <ThetaIconSvgIcon width="47" height="49" />
          <p>
            Você possui o livre arbítrio de escolha. Faça da sua caminhada uma
            jornada de luz com a ajuda do Thetahealing®️
          </p>
        </div>

        <div className="news">
          <h1>Assine nossa newsletter</h1>
          <form action="">
            <input type="text" placeholder="Insira seu e-mail" />
            <Link passHref href="/">
              <NewsletterButton>Assinar</NewsletterButton>
            </Link>
          </form>
        </div>
      </div>
      <div className="footer">
      <div className="footerContact" >
          <div className="menu">
          <Link href="#" ><a>Home</a></Link>
          <Link href="#" ><a>Contato</a></Link>
          <Link href="/suporte" ><a>Suporte</a></Link>
          <Link href="#" ><a>Notícias</a></Link>
          <Link href="#" ><a>Projetos Assistidos</a></Link>
          </div>
          <div>
          <Copyright>Copyright ©2020 Theta Brasil Terapia Online | CNPJ 38.166.672/0001-44. Todos os direitos reservados </Copyright>

          </div>
          </div>


          

            <div className="social">
              <Link href="https://www.youtube.com/channel/UCfoneG8D-xP9dZyq2607D3w" ><img src="/media/home/19.svg" alt="youtube" /></Link>
              <Link href="https://www.facebook.com/ThetaBrasil.online" ><img src="/media/home/18.svg" alt="facebook" /></Link>
              <Link href="https://www.instagram.com/thetabrasilonline/" ><img src="/media/home/17.svg" alt="instagram" /></Link>
              <Link href="#" ><img src="/media/home/16.svg" alt="spotify" /></Link>
              <Link href="#" ><img src="/media/home/14.svg" alt="spotify" /></Link>
              <Link href="#" ><img src="/media/home/15.svg" alt="spotify" /></Link>
            </div>


      </div>
     

    </FooterWrapper>
  );
};

export default memo(Footer);
