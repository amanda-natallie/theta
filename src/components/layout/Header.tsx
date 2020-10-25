import React, { memo } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { ThetaButton, MenuIconButton } from "../../styles/components/Button";
import {
  MenuBar,
  BrandArea,
  MenuSvg,
  Logo,
  NavArea,
  Nav,
  ActionsAreaDiv,
  ActionsArea,
} from "../../styles/components/Header";
import Link from "next/link";
import SearchArea from "./SearchArea";
import theme from "../../styles/theme";
import SignInSvgIcon from "../icons/SignInSvgIcon";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { FlexBox } from "../../styles/components/FlexBox";
import HamburguerMenuSvgIcon from "../icons/HamburguerMenuSvgIcon";

const Header = ({ color, elevation }: interfaceConstant.MenuProps) => {
  const useStyles = makeStyles({
    root: {
      background: color === "dark" ? "rgba(255,255,255,0.85)" : "none",
    },
  });
  const classes = useStyles();
  return (
    <MenuBar
      classes={{
        root: classes.root,
      }}
      color="inherit"
      elevation={elevation ? elevation : 0}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <FlexBox>
            <MenuSvg>
              <HamburguerMenuSvgIcon
                fillColor={color === "dark" ? "black" : "white"}
              />
            </MenuSvg>
            <Link passHref href="/">
              <BrandArea>
                <Logo
                  src={
                    color === "dark"
                      ? "/media/logo-cinza.svg"
                      : "/media/logo-branco.svg"
                  }
                />
              </BrandArea>
            </Link>
            <Link passHref href="/busca-profissionais">
              <ThetaButton theme="rainbow">Terapeutas</ThetaButton>
            </Link>
          </FlexBox>
          <NavArea>
            <Nav color={color}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Suporte</Link>
              </li>
              <li>
                <Link href="/">Notícias</Link>
              </li>
              <li>
                <Link href="/">Social</Link>
              </li>
            </Nav>
            <ActionsAreaDiv>
              <ActionsArea>
                <SearchArea color={color} />
              </ActionsArea>

              <Link passHref href="/login">
                <MenuIconButton color={color}>
                  <SignInSvgIcon
                    width="19"
                    height="18"
                    fillColor={
                      color === "dark" ? theme.palette.primary.main : "white"
                    }
                  />
                  Entrar
                </MenuIconButton>
              </Link>
            </ActionsAreaDiv>
          </NavArea>
        </Grid>
      </Container>
    </MenuBar>
  );
};

export default memo(Header);
