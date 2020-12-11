import React from "react"
import PageWrapper from "../components/layout/PageWrapper";
import { FlexBox } from "../styles/components/FlexBox";
import KnowStyle  from "../styles/components/KnowStyle";
import { Title } from "../styles/components/Typography"
import AssistedProject   from "../styles/components/AssistedProject"
import { Grid, Container, Box } from '@material-ui/core';
import BackButton from "../components/general/BackButton";
 
 const AssistedProjects= () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{alignItems:"center"}}> 
                <Grid container style={{margin:"50px"}} >
                    <Grid item xs={2} md={4}>
                         <BackButton link="/" />
                    </Grid>
                    <Grid item xs={10} md={8} >
                        <Title>Eu, você, o todo</Title>
                    </Grid>
                </Grid>
                <AssistedProject>
                     <FlexBox column>
                    <Title style={{margin:"10px"}}>Solidariedade e compaixão</Title>
                    <p>Nós do ThetaBrasil.online queremos promover uma conexão entre thetahealers, público em geral e 
                        projetos sociais, estabelecendo entre eles uma rede de apoio humano solidário. 
                        Unidos pela vontade de exercer um papel transformador de realidades, as três partes, utilizando a plataforma ThetaBrasil.online,  
                        contribuem ativamente para a evolução própria e a do outro, por meio do trabalho íntegro e voltado para o Bem maior.</p> 

                        <p>O verdadeiro objetivo de impactar a sociedade positivamente move toda a engrenagem de funcionamento desta plataforma, 
                        viabilizando campanhas mensais de doação coletiva, com repasses de 10% de toda receita à projetos sociais.</p>

                        <img src="media/osho.svg" alt=""/>
                        <p>Do nosso coração para o seu, é com imenso prazer que divulgamos aqui os lindos 
                            projetos sociais que já participaram da nossa plataforma, recebendo todo nosso amor 
                            em forma de ajuda.</p>

                            <Title style={{margin:"10px"}}>Campanha Atual</Title>

                    <p>A Associação Fênix é uma Organização da Sociedade Civil (OSC), fundada em 21 de junho de 2006, 
                        que iniciou seu trabalho tendo como missão combater a violência, dando ênfase a violência sexual e doméstica, conflitos familiares 
                        e atender crianças, 
                        adolescentes e jovens vivendo e/ou convivendo[1] com HIV/Aids por meio da socialização de informações e oferta de apoio psicossocial.</p>
                        <img src="media/mug.svg"/>

                    <h1 >Sobre o projeto</h1>
                    <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. 
                        A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>

                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, 
                        and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; 
                        on templates, websites, and stock designs.
                        Use our generator to get your own, or read on for the authoritative 
                        history of lorem The pur pose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) 
                        that doesn't distract from the layout.</p> 

                    <p>A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>

                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. 
                    Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.ipsum.
                    </p>
                    </FlexBox>
                    </AssistedProject>


                    </Container>
        </PageWrapper>

       </> 
    )
}
export default AssistedProjects

