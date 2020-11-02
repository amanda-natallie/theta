import api from './api';

interface getAllProfessionalsProps {
  provider_id: string
  date: string
}

export const makeAppointment = async (props: getAllProfessionalsProps) => {
  try {
    const appointment: any = await api.post('appointments', props)
    if(appointment.status === 'error'){
      alert(appointment.message)
    } else {
      alert(appointment.message)
    }
  } catch(error) {
    throw new Error(error.message)
  }
}

