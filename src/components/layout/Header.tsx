import React, { memo } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { ThetaButton, IconButton } from "../../styles/components/Button";
import {
  MenuBar,
  BrandArea,
  Logo,
  NavArea,
  Nav,
  ActionsArea,
} from "../../styles/components/Header";
import Link from "next/link";
import SearchArea from "./SearchArea";
import theme from "../../styles/theme";
import SignInSvgIcon from "../icons/SignInSvgIcon";
import interfaceConstant from "../../utils/constant/interfaceConstant";


const Header = ({ color }: interfaceConstant.MenuProps) => {
  const useStyles = makeStyles({
    root: {
      background: color === "dark" ? "rgba(255,255,255,0.85)" : "none"
    },
  });
  const classes = useStyles();
  return (
    <MenuBar
      classes={{
        root: classes.root,
      }}
      color="inherit"
      elevation={0}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <BrandArea>
            <Logo
              src={
                color === "dark"
                  ? "/media/logo-cinza.svg"
                  : "/media/logo-branco.svg"
              }
            />
            <ThetaButton theme="rainbow">Conheça</ThetaButton>
          </BrandArea>
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
            <ActionsArea>
              <SearchArea color={color} />
            </ActionsArea>
            <IconButton color={color}>
              <SignInSvgIcon
                width="19"
                height="18"
                fillColor={
                  color === "dark" ? theme.palette.primary.main : "white"
                }
              />
              Entrar
            </IconButton>
          </NavArea>
        </Grid>
      </Container>
    </MenuBar>
  );
};

export default memo(Header);
