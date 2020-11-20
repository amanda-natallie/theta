import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { FlexBox } from "../../styles/components/FlexBox";
import KnowStyle  from "../../styles/components/KnowStyle";
import { Title } from "../../styles/components/Typography"
import { Grid, Container } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
 
 const know = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{marginTop:"50px"}}> 
                <Grid container >
                    <Grid item xs={2} md={4}>
                         <BackButton link="/" />
                    </Grid>
                    <Grid item xs={10} md={8} >
                        <Title>A cura como um propósito</Title>
                    </Grid>
                </Grid>
                
                    </Container>
                    <KnowStyle>
                    <Container maxWidth='lg'>
                        <FlexBox style={{alignContent:"space-between"}}>
                           
                            <div style={{width:"39vw"}}>
                            <h1>Mostre-me</h1>
                            <p>Estamos muito feliz com sua presença em nossa comunidade terapêutica Thetahealing®.
                            Esperamos que sua experiência aqui seja enriquecedora, agradável e acolhedora. Sinta-se muito
                            bem-vindo para entrar em contato conosco a qualquer momento.

                            A proposta desta plataforma é promover a aproximação das pessoas da técnica Thetahealing®,
                            uma terapia quântica que se consolida cada vez mais como uma poderosa ferramenta de cura e
                            ressignificação pessoal. Nossos terapeutas (thetahealers) cadastrados são as melhores provas do
                            poder curador dessa técnica; através do curso de formação, todos passam por várias sessões
                            thetahealing, e as transformações promovidas em si são tão profundas (e intensas!) que acabam se
                            tornando, geralmente, o principal motivo pelo qual decidem aplicar a técnicas em outros que
                            também buscam a cura.</p>
                            </div>
                            <div style={{width:"45vw", marginLeft:"200px"}}>
                           <img src="/media/logoazul.svg"/>
                            </div>
                        </FlexBox>
                    </Container>
                    <Container maxWidth='lg'>
                        <FlexBox style={{alignContent:"space-between"}}>
                        <div style={{width:"45vw"}}>
                           <img src="/media/world.svg"/>
                            </div>
                            <div style={{width:"39vw"}}>
                            <p>Cremos no termo holístico da palavra cura, observando a boa fluidez entre os corpos físico,
                            emocional, mental e energético de cada um. Limpeza e realinhamento energético, quebra de
                            comportamentos mentais nocivos (crenças limitantes) e downloads de sentimentos mais elevados
                            têm um poder enorme de ressignificar fatos passados e abrir caminho para novos fluxos de
                            energia mais alinhados com nossa real vontade interior.

                            Com a ajuda do thetahealing, reaprendemos a nos sentir amados e acolhidos pela fonte Criadora,
                            certos da abundância que há no universo e no seu papel fundamental como indivíduo na
                            engrenagem divina. Curar é libertar-se das próprias amarras mentais, espirituais e energéticas e
                            simplesmente confiar no poder da manifestação pura e sincera.</p>
                            </div>
                          
                        </FlexBox>
                    </Container>
                    
                    <Container maxWidth='lg'>
                        <FlexBox style={{alignContent:"space-between"}}>
                            <div style={{width:"39vw"}}>
                            <p>Contribuir para a cura do Todo é nosso principal objetivo. Por meio dos atendimentos solidários
                            realizados pelo ThetaBrasil.online, fortalecemos nosso compromisso com a cura universal através
                            da doação de 10% de todo faturamento aos projetos sociais cadastrados pela plataforma.

                            Eu ajudo você. Você me ajuda. Nós ajudamos o outro.
                            Clique abaixo e conheça mais sobre os projetos assistidos pela plataforma ThetaBrasil.online. </p>
                            <button>Projetos assistidos</button>
                            </div>
                            <div style={{width:"45vw", marginLeft:"200px"}}>
                           <img src="/media/logocolor.svg"/>
                           <h1>... está feito, está feito, está feito</h1>
                           <p>Se você chegou até aqui, é porque sentiu o chamado para a cura interior. Uma dor física, a falta de alguém ou de algo,
                               insatisfações, ressentimentos, medos, qualquer que seja o sentimento que te trouxe aqui, seja grato e o acolha com carinho e atenção. 
                               Use-o como trampolim para sua evolução pessoal e inicie hoje uma nova etapa em sua vida. 
                               Conte conosco para tomar uma atitude que irá reposicionar seu foco, 
                            a fim de realizar seus desejos mais profundos e abrir-se para a felicidade e realização plena que já habita em você.</p>
                            </div>
                        </FlexBox>
                    </Container>
                    <Container maxWidth='lg'>
                        <FlexBox style={{alignContent:"space-between"}}>
                            <div style={{width:"39vw"}}>
                            <h1>Como funciona?</h1>
                            <p>Neste site você encontra informações diversas sobre Thetahealing®, incluindo uma lista confiável
                            de terapeutas thetahealers certificados nternacionalmente que atendem de forma online através
                            do ThetaBrasil.online.
                            Todos os profissionais da plataforma são comprometidos com a reciclagem e o aprofundamento
                            dos conhecimentos da técnica Thetahealing®. Nossos terapeutas atendem de forma voluntária e
                            à preço solidário (menor que o praticado no mercado) com o objetivo de facilitar o acesso da
                            terapia Thetahealing ao maior número de pessoas possível.
                            O ThetaBrasil.online garante sigilo, privacidade e profissionalismo em seu atendimento. As salas de
                            reunião são fornecidas pelo próprio website e você não precisa se preocupar em baixar nenhum
                            aplicativo para realizar sua consulta. Segurança e credibilidade são nossos pilares de atuação.
                            </p>
                            </div>
                            <div style={{width:"45vw", marginLeft:"200px"}}>
                           <img src="/media/tools.svg"/>
                            </div>
                        </FlexBox>
                    </Container>
                    </KnowStyle>
                    
            </PageWrapper>
        </>
    )
}
export default know