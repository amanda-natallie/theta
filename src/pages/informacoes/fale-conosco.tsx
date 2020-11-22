import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { FlexBox } from "../../styles/components/FlexBox";
import { Title } from "../../styles/components/Typography"
import { Grid, Container } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
import TextField from "@material-ui/core/TextField"

const ContactUs = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{marginTop:"50px"}}> 
                <Grid container >
                    <Grid item xs={2} md={4}>
                         <BackButton link="/informacoes" />
                    </Grid>
                    <Grid item xs={10} md={8} >
                        <Title>Estamos aqui para te ajudar :)</Title>
                    </Grid>
                </Grid> 
                    </Container>
                <Container maxWidth='lg' style={{width:"90vw", marginTop:"50px"}}>
                <FlexBox column>
                    <h1>Enviar mensagem</h1>
                    <form>
                    <TextField label="Nome" style={{width:"55vw"}}/>
                    <TextField label="Email"  style={{width:"55vw"}}/>
                    <TextField label="Assunto"  style={{width:"55vw"}}/>
                    <TextField label="Texto"  style={{width:"55vw", paddingBottom:"500px"}}/>
                    </form>
                </FlexBox>
                </Container>
        </PageWrapper>
        </>
        )
    }
    export default ContactUs