import { Avatar, Container, Grid, SvgIcon, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BackButton from "../components/general/BackButton";
import CustomSelect from "../components/general/CustomSelect";
import PageWrapper from "../components/layout/PageWrapper";
import { Divider } from "../styles/components/Divider";
import { Subtitle, Title } from "../styles/components/Typography";
import { DatePicker } from "@material-ui/pickers";
import { colors } from "../styles/colors";
import { SearchTherapists } from "../styles/pages/SearchProfessionals";
import { CardBox } from "../styles/components/Box";
import { PriceBlock } from "../styles/pages/Home";
import { FlexBox } from "../styles/components/FlexBox";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        margin: theme.spacing(3),
    },
  }),
);

const SearchProfessionalsPage = () => {
  const classes = useStyles();
  const [option, setOption] = useState("");
  const [selectedDate, handleDateChange] = useState(undefined);

  const options = ["São Paulo", "Rio de Janeiro", "Paraiba", "Minas Gerais"];

  const dummy = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3"];

  return (
    <PageWrapper>
      <SearchTherapists>
        <Divider height="60px" />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={2} md={4}>
              <BackButton link="/" />
            </Grid>
            <Grid item xs={10} md={8}>
              <Title>Selecione seu melhor horário</Title>
            </Grid>
          </Grid>
          <Divider height="60px" />
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <CustomSelect
                options={options}
                setOptions={setOption}
                selectedOption={option}
                type="local"
                label="Localização"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomSelect
                options={[]}
                setOptions={setOption}
                selectedOption={option}
                type="date"
                label="Data"
              />
            </Grid>
          </Grid>
          <Divider height="60px" />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item lg={3}>
              <Subtitle color={colors.gray50}>Sábado, 19 de Setembro</Subtitle>
            </Grid>
            <Grid item lg={4} className="navigation-right">
              <p>
                <span>1 - 9 de 15.397.360</span>Terapeutas no Brasil
              </p>
              <SvgIcon onClick={undefined}>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.48 6.49 2 12 2L12.2798 2.00384C17.6706 2.15216 22 6.57356 22 12C22 17.51 17.52 22 12 22C6.49 22 2 17.51 2 12ZM13.98 16C14.27 15.7 14.27 15.23 13.97 14.94L11.02 12L13.97 9.05997C14.27 8.76997 14.27 8.28997 13.98 7.99997C13.68 7.69997 13.21 7.69997 12.92 7.99997L9.43002 11.47C9.29002 11.61 9.21002 11.8 9.21002 12C9.21002 12.2 9.29002 12.39 9.43002 12.53L12.92 16C13.06 16.15 13.25 16.22 13.44 16.22C13.64 16.22 13.83 16.15 13.98 16Z"
                  fill="#7643FF"
                />
              </SvgIcon>
              <SvgIcon>
                <circle cx="12" cy="12" r="10" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.52 17.51 22 12 22L11.7202 21.9962C6.32942 21.8478 2 17.4264 2 12C2 6.49 6.48 2 12 2C17.51 2 22 6.49 22 12ZM10.02 7.99992C9.73 8.29992 9.73 8.76992 10.03 9.05992L12.98 11.9999L10.03 14.9399C9.73 15.2299 9.73 15.7099 10.02 15.9999C10.32 16.2999 10.79 16.2999 11.08 15.9999L14.57 12.5299C14.71 12.3899 14.79 12.1999 14.79 11.9999C14.79 11.7999 14.71 11.6099 14.57 11.4699L11.08 7.99992C10.94 7.84992 10.75 7.77992 10.56 7.77992C10.36 7.77992 10.17 7.84992 10.02 7.99992Z"
                  fill="#7643FF"
                />
              </SvgIcon>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container>
            {dummy.map((e: any, index: number) => (
              <Grid item xs={12}>
                <CardBox>
                  <FlexBox>
                    <header>
                      <Avatar src="/media/thera.png" />
                    </header>
                    <div className="content">
                      <h5>Davi Lucas</h5>
                      <p>ThetaHealer Certificado</p>
                      <p>
                        26 anos <span>•</span> Pernambuco, Arcoverde, Brasil
                      </p>

                      <ul>
                        <li>08:00</li>
                        <li>09:00</li>
                        <li>10:00</li>
                        <li>11:00</li>
                        <li>12:00</li>
                        <li>13:00</li>
                        <li>14:00</li>
                      </ul>
                    </div>
                  </FlexBox>
                  <div className="pricing">
                    <PriceBlock>
                      <span>RS</span>
                      <p>107,00</p>
                    </PriceBlock>
                    <img src="/media/rating.png" />
                  </div>
                </CardBox>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justify="center">
              <Pagination className={classes.root} count={10} variant="outlined" shape="rounded" />
          </Grid>
        </Container>
      </SearchTherapists>
    </PageWrapper>
  );
};

export default SearchProfessionalsPage;
