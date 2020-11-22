import React from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import { Title } from "../../styles/components/Typography";
import { ContentProject } from "../../styles/components/ContentProject";
import { Grid, Container } from "@material-ui/core";
import BackButton from "../../components/general/BackButton";
import { HeaderWithBackButtonWrapper } from "../../styles/pages/Support";
import { Divider } from "../../styles/components/Divider";

const OurProject = () => {
  return (
    <>
      <PageWrapper>
        <Container maxWidth="lg" style={{ marginTop: "50px" }}>
          <Grid container>
          <HeaderWithBackButtonWrapper>
              <BackButton link="/informacoes" />
              <Title>Nosso Projeto</Title>
              <div />
            </HeaderWithBackButtonWrapper>
          </Grid>
        </Container>
        <ContentProject>
          <Container maxWidth="lg" style={{ width: "90vw", marginTop: "50px" }}>
            <text>
              Suspendisse eu scelerisque tellus. Curabitur non tincidunt nisl,
              sit amet interdum ex. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Cras congue
              eros vitae risus tincidunt, nec pulvinar massa bibendum. Nam sit
              amet convallis mauris. raesent pulvinar sollicitudin lacus eu
              luctus. Donec eget ante et mi finibus imperdiet id nec quam. In
              rutrum, massa non porta malesuada, magna quam ullamcorper nunc, ut
              placerat erat metus et leo. Fusce sed dapibus libero. Nullam
              eleifend libero a lectus blandit, elementum euismod arcu
              elementum. Donec tempus varius mi, vitae aliquam erat luctus et.
              Aliquam in lacinia nunc.
            </text>
    
            <li>
              <span>Free updates: </span>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </li>
            <li>
              <span>Technical support: </span>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </li>
            <Divider height="30px" />
            
            <div
              style={{ textAlign: "center", width: "100%", marginTop: "50px" }}
            >
              <h1>Conseguimos solucionar sua dúvida?</h1>
              <button className="ButtonPrimary">Na verdade não</button>
              <button className="ButtonSecundary">Sim, obrigado!</button>
            </div>
          </Container>
        </ContentProject>
      </PageWrapper>
    </>
  );
};
export default OurProject;
