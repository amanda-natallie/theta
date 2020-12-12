import React, { useEffect, useState } from "react";

import { Container, Grid } from "@material-ui/core";
import BackButton from "../components/general/BackButton";
import PageWrapper from "../components/layout/PageWrapper";
import { CardBox } from "../styles/components/Box";
import { Subtitle, Title } from "../styles/components/Typography";
import { HeaderWithBackButtonWrapper } from "../styles/pages/Support";
import theme from "../styles/theme";
import { FlexBox } from "../styles/components/FlexBox";
import Calendar from "../components/general/Calendar";
import { MiniChip } from "../styles/components/MiniChip";
import { TimeChips } from "../styles/pages/SearchProfessionals";
import { ThetaButton } from "../styles/components/Button";

const information = () => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [times, setTimes] = useState([]);

  const getHours = () => {
    if (new Date(selectedDate) === new Date()) {
      let result = [];
      const nowHour = new Date().getHours();

      for (let i = nowHour; i < 24; i++) {
        result.push(i + ":00");
      }

      setTimes(result);
    } else {
      let quarterHours = ["00", "30"];
      let times = [];
      for (let i = 0; i < 24; i++) {
        times.push(i + ":00");
      }
      setTimes(times);
    }
  };

  useEffect(() => {
    getHours();
  }, [selectedDate]);

  useEffect(() => {
    console.log("data de hj", new Date("YYYY-MM-DD"));
    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

  return (
    <>
      <PageWrapper>
        <Container
          maxWidth="lg"
          style={{ justifyContent: "space-between", marginTop: "20px" }}
        >
          <Grid container>
            <HeaderWithBackButtonWrapper>
              <BackButton link="/" />
              <Title>Escolha seu Melhor Horário</Title>
              <div />
            </HeaderWithBackButtonWrapper>
          </Grid>
          <Grid container>
            <CardBox column >
              <Subtitle
                color={theme.palette.secondary.main}
                style={{ alignSelf: "flex-start" }}
              >
                Escolha o dia e o horário desejado
              </Subtitle>

              <FlexBox className="dateSchedule">
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />

                <TimeChips>
                  <MiniChip>
                    {times.map((e: any, index: number) => (
                      <li>{e}</li>
                    ))}
                  </MiniChip>
                </TimeChips>
              </FlexBox>
              <ThetaButton theme="purple" onClick={() => alert("clicou")}>
                AVANÇAR
              </ThetaButton>
            </CardBox>
          </Grid>
        </Container>
      </PageWrapper>
    </>
  );
};
export default information;
