import api from './api';

interface getAllProfessionalsProps {
  provider_id: string
  date: Date
  time: string
  token: string
}

export const makeAppointment = async (props: getAllProfessionalsProps) => {
  const {provider_id, date, time, token} = props
  const formatDate = `${date.toLocaleString('en-US', { year: 'numeric'})}-${date.toLocaleString('en-US', 
  { month: '2-digit'})}-${date.toLocaleString('en-US', { day: '2-digit'})} ${time}:00:00`

  const requestBody = { 
    therapist_id: provider_id,
    date: formatDate,
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

  try {
    const appointment: any = await api.post('appointments', requestBody, config)
    if(appointment.status === 'error'){
      alert(appointment.message)
    } else {
      alert("Agendamento realizado com sucesso. Aguarde nosso e-mail de confirmação.")
      window.location.href = '/dashboard'
    }
  } catch(error) {
    alert(error.response.data.message);
  }
}