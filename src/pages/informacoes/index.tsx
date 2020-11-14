import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import BackButton from "../../components/general/BackButton";
import { FlexBox } from "../../styles/components/FlexBox";
import { CardBox } from "../../styles/components/Box"
import { Container, Grid } from '@material-ui/core';
import { Title } from "../../styles/components/Typography"



const information =() =>{
    return( 
        <> 
        
        <PageWrapper >
           
            <Container maxWidth='lg'>
            <Grid container>
            <Grid item xs={2} md={4}>
              <BackButton link="/" />
            </Grid>
            <Grid item xs={10} md={8}>
              <Title>Informações</Title>
            </Grid>
          </Grid>
            <FlexBox column>
            <CardBox>
                <Grid>
               <h1>Oque é nosso Projeto</h1>
                <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p>
                </Grid>
            </CardBox>
            <CardBox>
                <Grid>
                <h1>Termos de condições </h1>
                <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p>
                </Grid>
            </CardBox>
            <CardBox>
                <Grid>
                <h1>Perguntas frequentes</h1>
                <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p>
                </Grid>
            </CardBox>
            <CardBox>
                <Grid>
                <h1>Fale conosco</h1>
                <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p>
                </Grid>
            </CardBox>
            </FlexBox>
            </Container>
        </PageWrapper>
       </> 
    )
}
export default information