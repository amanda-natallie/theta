import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import BackButton from "../../components/general/BackButton";
import { FlexBox } from "../../styles/components/FlexBox";
import { CardBox } from "../../styles/components/Box"
import { Container, Grid } from '@material-ui/core';
import { TitleInfo } from "../../styles/components/TitleInfo"
import { Title } from "../../styles/components/Typography"
import {SvgIcon} from '@material-ui/core'




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
                <FlexBox column >
               <TitleInfo>Oque é nosso Projeto</TitleInfo>
               <TitleInfo><p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p></TitleInfo> 
                </FlexBox>
            </CardBox>
            <CardBox>
                <Grid>
                <TitleInfo>Termos de condições </TitleInfo>
                <TitleInfo><p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p></TitleInfo> 
                </Grid>
            </CardBox>
            <CardBox>
                <Grid>
                <TitleInfo>Perguntas frequentes</TitleInfo>
                <TitleInfo><p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p></TitleInfo> 

                </Grid>
            </CardBox>
            <CardBox>
                <Grid>
                <TitleInfo>Fale conosco</TitleInfo>
               <TitleInfo><p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan</p></TitleInfo> 
                </Grid>
            </CardBox>
            </FlexBox>
            </Container>
        </PageWrapper>
       </> 
    )
}
export default information