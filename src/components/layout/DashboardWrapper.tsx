import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/link";
import React, { memo, useEffect, useState  } from "react";
import { useDispatch } from "react-redux"
import { userLogout } from "../../services/users";
import { MenuIconButton, ThetaButton } from "../../styles/components/Button";
import {
  DashboardPage,
  DashboardMenu,
} from "../../styles/components/DashboardPage";
import { Divider } from "../../styles/components/Divider";
import { FlexBox } from "../../styles/components/FlexBox";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import SignInSvgIcon from "../icons/SignInSvgIcon";
import { useRouter } from "next/router";
import { appointmentMock, userInfoMock } from "../../mocks";


const DashboardWrapper = ({
  title,
  breadcrumbs,
  children,
}: interfaceConstant.PageProps) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [user, setUser] = useState(userInfoMock);

  const getInformation = async () => {
    if (Object.prototype.hasOwnProperty.call(localStorage, "userInformation")) {
      
      const userInfo = JSON.parse(
        localStorage.getItem("userInformation") || "{}"
      );
      const token: string = localStorage.getItem("authToken");
      setIsLoggedIn(token);
      setUser(userInfo);
    } else {
      router.push("/login");
    }
  }; 

  useEffect(() => {
    getInformation();
  }, []); 
  
  return (
    <DashboardPage>
      <div className="sidebar">
        <Link passHref href="/">
        <a className="active">
        <FlexBox justify="center">
          <img
            src="/media/home/capa-logo.svg"
            alt="logotipo theta brasil"
            className="brand"
          />
        </FlexBox>
        </a>
        </Link>
        <Divider height="30px" />
        <FlexBox justify="space-between" className="topmenu">
                <h2>{user.name} {user.lastName}</h2>
          <img src="/media/icons/chevronDown.svg" alt="abrir menu" />
        </FlexBox>
        <DashboardMenu>
          <li>
            <Link passHref href="/dashboard">
              <a className="active">
                <img src="/media/icons/dashboard/homemenuicon.svg" alt="Home" />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href="/dashboard/historico">
              <a >
                <img
                  src="/media/icons/dashboard/chamadasmenuicon.svg"
                  alt="historico"
                />
                <span>Histórico</span>
              </a>
            </Link>
          </li>
          {user.typeUser === "client" && (
            <li style={{ position: "absolute", bottom: 10 }}>
              <ThetaButton onClick={() => window.confirm("Tem certeza que deseja cancelar sua conta?")}>
                Cancelar Conta
              </ThetaButton>
            </li>
          )}
        </DashboardMenu>
      </div>

      <div className="main">
        <div className="topbar">
          <img
            src="/media/icons/dashboard/togglemenuicon.svg"
            alt="toggle menu"
          />

          <div className="actions">
            <img
              src="/media/icons/dashboard/notificationicon.svg"
              alt="notification menu"
            />
            <img src="/media/icons/dashboard/usericon.svg" alt="user menu" />
            <button style={{backgroundColor: 'transparent'}} onClick={() => {dispatch({ type: 'loading' }); userLogout()}}>
                  <MenuIconButton color="dark">
                    <SignInSvgIcon
                      width="19"
                      height="18"
                      fillColor={theme.palette.primary.main}
                    />
                    Sair
                  </MenuIconButton>
                </button>
          </div>
        </div>
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Typography color="textPrimary">{breadcrumbs}</Typography>
          </Breadcrumbs>
          <h1>{title}</h1>
        </div>
        <div className="content">{children}</div>
      </div>
    </DashboardPage>
  );
};

export default memo(DashboardWrapper);
