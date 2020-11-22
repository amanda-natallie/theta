import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { FlexBox } from "../../styles/components/FlexBox";
import { Title } from "../../styles/components/Typography"
import { Grid, Container } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
import {SocialMenu } from "../../styles/components/Footer";
import Link from "next/link";
import {TextField} from "@material-ui/core"
 
const ContactUs = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{marginTop:"50px"}}> 
                <Grid container >
                    <Grid item xs={2} md={4}>
                         <BackButton link="/suporte" />
                    </Grid>
                    <Grid item xs={10} md={8} >
                        <Title>Estamos aqui para te ajudar :)</Title>
                    </Grid>
                </Grid> 
                    </Container>
        <Container maxWidth='lg' style={{width:"90vw", marginTop:"50px"}}>
        <FlexBox style={{justifyContent:"space-between"}}>
        
        <div style={{width:"46vw"}}>
        <h1>Contato</h1>
        <h2>contato@thetabrasil.online</h2>
        <h2>+55 (27) 99277-1744</h2>
        <h2>Escadaria Acyr Guimarães, 25 Centro - Vitória (ES)</h2>
        <FlexBox>
        <Link href="#" ><img src="/media/home/19.svg" alt="youtube"/></Link>
        <Link href="#" ><img src="/media/home/18.svg" alt="facebook"/></Link>
        <Link href="#" ><img src="/media/home/17.svg" alt="instagram"/></Link>
        <Link href="#" ><img src="/media/home/16.svg" alt="spotify"/></Link>
        </FlexBox>
        </div>
        <div>
           <form>
            <FlexBox column style={{width:"55vw"}}>   
            <h1>Enviar Mensagem</h1>
            <TextField  label="Nome" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Assunto" variant="outlined" />
            <TextField label="Texto" variant="outlined" />
            <button>Enviar</button>
            </FlexBox> 
            </form>
         </div>
            </FlexBox>
            
            </Container>
        </PageWrapper>
        </>
        )
    }
    export default ContactUs