import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { FlexBox } from "../../styles/components/FlexBox";
import { Title } from "../../styles/components/Typography"
import { Grid, Container } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
import {SocialMenu } from "../../styles/components/Footer";
import Link from "next/link";
import {TextField} from "@material-ui/core"
import { Contact } from '../../styles/components/Contact';
import { ThetaButton } from '../../styles/components/Button';
import { HeaderWithBackButtonWrapper } from '../../styles/pages/Support';
 
const ContactUs = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg'> 
        <HeaderWithBackButtonWrapper>

                         <BackButton link="/suporte" />
                        <Title>Estamos aqui para te ajudar :)</Title>
                        <div/>

                        </HeaderWithBackButtonWrapper>
        </Container>
                
         <Container maxWidth="lg">
        <FlexBox style={{justifyContent:"space-between"}}>
        <Contact>
        <div className="contentInfo">
            <div>
            <h1>Contato</h1>
            </div>
            <div className="contactInfo">
                <img src="/media/fale-conosco/email.svg"/>        
                <h2>contato@thetabrasil.online</h2>
            </div>
            <div className="contactInfo">
                <img src="/media/fale-conosco/whatsapp.svg"/>
                <h2>+55 (27) 99277-1744</h2>
            </div>
            <div className="contactInfo">
            <img src="/media/fale-conosco/map.svg" alt=""/>
            <h2>Escadaria Acyr Guimarães, 25 Centro - Vitória (ES)</h2>
            </div>
            <Grid container>
            <Link href="#" ><img src="/media/home/19.svg" alt="youtube"/></Link>
            <Link href="#" ><img src="/media/home/18.svg" alt="facebook"/></Link>
            <Link href="#" ><img src="/media/home/17.svg" alt="instagram"/></Link>
            <Link href="#" ><img src="/media/home/16.svg" alt="spotify"/></Link>
            </Grid>
        </div>
       

        <div>
           <form>
           <h1>Enviar Mensagem</h1>
           <Grid container xs={12}>
            <TextField  style={{margin:"10px"}} fullWidth label="Nome" variant="outlined" />
            <TextField  style={{margin:"10px"}} fullWidth label="Email" variant="outlined" />
            <TextField  style={{margin:"10px"}} fullWidth label="Assunto" variant="outlined" />
            <TextField  style={{margin:"10px"}} multiline rows={6} fullWidth label="Texto" variant="outlined" />
            <ThetaButton fullWidth type="button" theme="purple">Enviar</ThetaButton>
            </Grid>
            </form>
         </div>
         </Contact>
         </FlexBox>
         </Container>  
        </PageWrapper>
        </>
        )
    }
    export default ContactUs