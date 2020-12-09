import { Box, Container, Grid } from "@material-ui/core";
import React, {useEffect, useState}from "react";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import Schedule from "../../styles/components/Schedule";
import {userPastAppointments} from "../../services/users";
import {therapistPastAppointments} from "../../services/profissionals";

const HistoricPage = () =>{
    const [appointments, setAppointments] = useState([])

    const getInfo = async ()=>{
    if (Object.prototype.hasOwnProperty.call(localStorage, "userInformation")) {
        const userInfo = JSON.parse(
            localStorage.getItem("userInformation") || "{}"
        );
        const response =
            userInfo.typeUser === "client"
            ? await userPastAppointments(userInfo.id)
            : await therapistPastAppointments(userInfo.id);
        setAppointments(response);
    } };

    useEffect(() => {
        getInfo();
    }, [])

    console.log(appointments)
       
    return(    
    <>
    <Schedule>
    <DashboardWrapper>
        <Container maxWidth="lg">
            <Box>
        <Grid>
        <ul>
            <header>
                <Grid container  >
                <Grid container style={{alignItems:"center"}}>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}><h1>ID</h1></Grid>
                    <Grid item xs={2}><h1>Terapeuta / Usuário</h1></Grid>
                    <Grid item xs={3}><h1>Data</h1></Grid>
                    <Grid item xs={1}><h1>Horário</h1></Grid>
                    <Grid item xs={1}><h1>Status</h1></Grid>
                </Grid>
                </Grid>
            </header>
            {appointments ? appointments.map((item, index) => (
                <li key={item.id}><Grid container >
                    <Grid container style={{alignItems:"center"}}>
                        <Grid item xs={1}> <img src="/media/icons/dashboard/historic.svg" alt=""/></Grid>
                        <Grid item xs={2}><b><h2>{index + 1}</h2></b></Grid>
                        <Grid item xs={2}><h2>John Doe</h2></Grid>
                        <Grid item xs={3}><h2>25 de Outubro de 2020</h2></Grid>
                        <Grid item xs={1}><h2>15:30</h2></Grid>
                        <Grid item xs={1}><h2>Confirmado</h2></Grid>
                    </Grid>
                </Grid>
            </li>
            )) : (
            <li><Grid container >
                <Grid container style={{alignItems:"center"}}>
                    <Grid item xs={1}> <img src="/media/icons/dashboard/historic.svg" alt=""/></Grid>
                    <Grid item xs={2}><b><h2>Sem agendamentos no histórico</h2></b></Grid>
                </Grid>
            </Grid>
        </li>
            )}
        </ul>        
        </Grid>
    </Box>         
    </Container>
    </DashboardWrapper>
    </Schedule>

    </>
        )
}
export default HistoricPage