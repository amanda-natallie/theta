import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { Title } from "../../styles/components/Typography"
import { ContentTerms } from "../../styles/components/ContentTerms"
import { Grid, Container } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
const TermsConditions = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{marginTop:"50px"}}> 
                <Grid container >
                    <Grid item xs={2} md={4}>
                        <BackButton link="/informacoes" />
                    </Grid>
                    <Grid item xs={10} md={8} >
                        <Title>Termos e condições de uso</Title>
                    </Grid>
                </Grid> 
        </Container>
            <Container maxWidth='lg' style={{marginTop:"50px"}}>
               <ContentTerms> 
                <h1>Bem-vindo ao Termos e Condições</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h1>1. Oque são Termos e Condições</h1>
                <h2>A. Oque incluir nos termos de condições</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h2>B. São necessarios nos termos de condições?</h2>
                <p> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>

                <h1>2. Exemplos de Termos e Condições</h1>
                <p> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>

                <h1>3. Seu conteudo em nossos serviços</h1>
                <p> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                </ContentTerms>
            </Container>
         </PageWrapper>
        </>
        )
     }
     export default TermsConditions; 