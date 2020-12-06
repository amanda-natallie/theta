import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../components/layout/DashboardWrapper";
import Schedule from "../../styles/components/Schedule";
import { userPastAppointments } from "../../services/users";
import { therapistPastAppointments } from "../../services/profissionals";
import { AppointmentList } from "../../styles/pages/dashboard/Dashboard";
import PaymentStatus from "../../components/general/PaymentStatus";
import { FlexBox } from "../../styles/components/FlexBox";
import { getDateDifference, renderDate } from "../../utils/helpers";


const HistoricPage = () => {

    const [appointments, setAppointments] = useState([])
    const [] = useState(false);
    const [, setCurrentAppointment] = useState(undefined);


    const getInfo = async () => {

        if (Object.prototype.hasOwnProperty.call(localStorage, "userInformation")) {
            const userInfo = JSON.parse(
                localStorage.getItem("userInformation") || "{}"
            );
            const response =
                userInfo.typeUser === "client"
                    ? await userPastAppointments(userInfo.id)
                    : await therapistPastAppointments(userInfo.id);
            setAppointments(response);
        }
    };

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <>
            <Schedule>
                <DashboardWrapper>
                    <Container maxWidth="lg">
                  
                        <AppointmentList>
                            {appointments && appointments.length > 0 ?
                                appointments.map((appointmentItem: any, index: number) => (
                                    <li key={index} onClick={() =>
                                        setCurrentAppointment({ ...appointmentItem, closeToMetting: getDateDifference(appointmentItem.date) < 10, bankTransfer: getDateDifference(appointmentItem.date) > 4400 })
                                    }>
                                        <FlexBox justify="space-between" style={{
                                            alignItems: "center",
                                            height: "65px"
                                        }}>
                                            <h5>{appointmentItem.therapist ? appointmentItem.therapist.name : 'Priscilla Leite'}</h5>
                                            <p className="time">
                                                <img
                                                    src="/media/icons/time.svg"
                                                    alt="time"
                                                />
                                                {renderDate(appointmentItem.date)}
                                            </p>
                                            <PaymentStatus
                                                status={appointmentItem.status}
                                            />
                                        </FlexBox>
                                    </li>
                                )
                                ) : <li><h5 style={{ textAlign: 'center', marginTop: 10 }}>Você não tem agendamentos</h5></li>}
                        </AppointmentList>
                    </Container>
                </DashboardWrapper>
            </Schedule>

        </>
    )
}
export default HistoricPage