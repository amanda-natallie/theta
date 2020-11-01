import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/link";
import React, { memo } from "react";
import {
  DashboardPage,
  DashboardMenu,
} from "../../styles/components/DashboardPage";
import { Divider } from "../../styles/components/Divider";
import { FlexBox } from "../../styles/components/FlexBox";
import interfaceConstant from "../../utils/constant/interfaceConstant";

const DashboardWrapper = ({
  title,
  breadcrumbs,
  children,
}: interfaceConstant.PageProps) => {
  return (
    <DashboardPage>
      <div className="sidebar">
        <FlexBox justify="center">
          <img
            src="/media/home/capa-logo.svg"
            alt="logotipo theta brasil"
            className="brand"
          />
        </FlexBox>
        <Divider height="30px" />
        <FlexBox justify="space-between" className="topmenu">
          <h2>Matheus Rabelo</h2>
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
            <Link passHref href="/chamadas">
              <a>
                <img
                  src="/media/icons/dashboard/chamadasmenuicon.svg"
                  alt="Chamadas"
                />
                <span>Chamadas</span>
              </a>
            </Link>
          </li>
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
