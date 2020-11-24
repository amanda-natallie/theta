import React from 'react'
import PageWrapper from "../../components/layout/PageWrapper";
import { FlexBox } from "../../styles/components/FlexBox";
import KnowStyle  from "../../styles/components/KnowStyle";
import { Title } from "../../styles/components/Typography"
import { Grid, Container, Box } from '@material-ui/core';
import BackButton from "../../components/general/BackButton";
 
 const know = () =>{
    return (
        <>
        <PageWrapper>
        <Container maxWidth='lg' style={{margin:"50px"}}> 
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
                          
                            <Box display="flex" flexDirection='row' justifyContent="center">
                             <section>
                            <h1>Mostre-me</h1>
                            <p>Estamos muito feliz com sua presença em nossa comunidade terapêutica Thetahealing®.
                            Esperamos que sua experiência aqui seja enriquecedora, agradável e acolhedora. Sinta-se muito
                            bem-vindo para entrar em contato conosco a qualquer momento.</p>

                            <p>A proposta desta plataforma é promover a aproximação das pessoas da técnica Thetahealing®,
                            uma terapia quântica que se consolida cada vez mais como uma poderosa ferramenta de cura e
                            ressignificação pessoal. Nossos terapeutas (thetahealers) cadastrados são as melhores provas do
                            poder curador dessa técnica; através do curso de formação, todos passam por várias sessões
                            thetahealing, e as transformações promovidas em si são tão profundas (e intensas!) que acabam se
                            tornando, geralmente, o principal motivo pelo qual decidem aplicar a técnicas em outros que
                            também buscam a cura.</p>
                            </section>   
                            <section>
                           <img src="/media/logoazul.svg"/>
                           </section>
                           </Box>

                           <Box display="flex" flexDirection='row' justifyContent="center">
                            <section>
                           <img src="/media/world.svg"/>
                           </section>
                           <section>
                            <p>Cremos no termo holístico da palavra cura, observando a boa fluidez entre os corpos físico,
                            emocional, mental e energético de cada um. Limpeza e realinhamento energético, quebra de
                            comportamentos mentais nocivos (crenças limitantes) e downloads de sentimentos mais elevados
                            têm um poder enorme de ressignificar fatos passados e abrir caminho para novos fluxos de
                            energia mais alinhados com nossa real vontade interior.</p>

                            <p>Com a ajuda do thetahealing, reaprendemos a nos sentir amados e acolhidos pela fonte Criadora,
                            certos da abundância que há no universo e no seu papel fundamental como indivíduo na
                            engrenagem divina. Curar é libertar-se das próprias amarras mentais, espirituais e energéticas e
                            simplesmente confiar no poder da manifestação pura e sincera.</p>
                            </section>
                            </Box>
                           <Box display="flex" flexDirection='row' justifyContent="center">
                            <section>
                            <p>Contribuir para a cura do Todo é nosso principal objetivo. Por meio dos atendimentos solidários
                            realizados pelo ThetaBrasil.online, fortalecemos nosso compromisso com a cura universal através
                            da doação de 10% de todo faturamento aos projetos sociais cadastrados pela plataforma.</p>
                            <p>
                            Eu ajudo você. Você me ajuda. Nós ajudamos o outro.
                            Clique abaixo e conheça mais sobre os projetos assistidos pela plataforma ThetaBrasil.online. </p>
                            <button>Projetos assistidos</button>
                          </section>
                          <section>
                           <img src="/media/logocolor.svg"/>
                            </section>
                            </Box>
                            <Box display="flex" flexDirection='row' justifyContent="end">
                            <section>
                           <h1 style={{margin:"20px"}}> ... está feito, está feito, está feito</h1>
                           <p>Se você chegou até aqui, é porque sentiu o chamado para a cura interior. Uma dor física, a falta de alguém ou de algo,
                               insatisfações, ressentimentos, medos, qualquer que seja o sentimento que te trouxe aqui, seja grato e o acolha com carinho e atenção. 
                               Use-o como trampolim para sua evolução pessoal e inicie hoje uma nova etapa em sua vida. 
                               Conte conosco para tomar uma atitude que irá reposicionar seu foco, 
                            a fim de realizar seus desejos mais profundos e abrir-se para a felicidade e realização plena que já habita em você.</p>
                          </section>
                          </Box>
                          <Box display="flex" flexDirection='row' justifyContent="center">
                            <section>
                            <h1>Como funciona?</h1>
                            <p>Neste site você encontra informações diversas sobre Thetahealing®, incluindo uma lista confiável
                            de terapeutas thetahealers certificados nternacionalmente que atendem de forma online através
                            do ThetaBrasil.online.</p>

                            <p>Todos os profissionais da plataforma são comprometidos com a reciclagem e o aprofundamento
                            dos conhecimentos da técnica Thetahealing®. Nossos terapeutas atendem de forma voluntária e
                            à preço solidário (menor que o praticado no mercado) com o objetivo de facilitar o acesso da
                            terapia Thetahealing ao maior número de pessoas possível.</p>

                            <p>O ThetaBrasil.online garante sigilo, privacidade e profissionalismo em seu atendimento. As salas de
                            reunião são fornecidas pelo próprio website e você não precisa se preocupar em baixar nenhum
                            aplicativo para realizar sua consulta. Segurança e credibilidade são nossos pilares de atuação.
                            </p>
                            </section>
                            <section>
                            <img src="/media/tools.svg"/>
                            </section>
                            </Box>

                            <Box display="flex" flexDirection='row' justifyContent="center">
                            <section>
                            <img src="/media/play.svg"/>
                            </section>
                            <section>
                            <p>Após a confirmação do seu agendamento online, você recebe via e-mail e whatsapp o link para
                            acesso à sala de reunião. Para iniciar a consulta, no dia e hora marcados, você clica no link para ser
                            direcionado automaticamente à sala de espera do terapeuta.</p>

                            <p>Todo usuário da plataforma, seja cliente ou terapeuta, terá seu perfil próprio contendo
                            informações sobre seus agendamentos, como históricos, próximas chamadas, perfis favoritos, canal
                            de mensagem direta com o terapeuta, chat com a ouvidoria ThetaBrasil.online e botão consulta
                            agora, com acesso direto à diversos terapeutas disponíveis naquele momento.</p>
                            </section>
                            
                            </Box>

                            
                            
                    </Container>
                    </KnowStyle>
                    
            </PageWrapper>
        </>
    )
}
export default know