import api from './api';

interface getAllProfessionalsProps {
  day: string
  month: string
  year: string
}

export const getAllProfessionals = async (props: getAllProfessionalsProps) => {
  const {day, month, year } = props
  const config = { params: { day, month, year } }
  try {
    const providers: any = await api.get('providers')
    const result = providers.data.map(async (item) => {
      const availability = await api.get(`providers/${item.id}/day-availability`, config)
      return {...item, availability: availability.data}
    })
    return Promise.all(result)
  } catch(error) {
    alert(error.response.data.message);
  }
}

export const getProssionalInfo = async (username: string) => {
  const config = { params: { username } }
  try {
    const response = await api.get(`therapists`, config)
    return response.data
  } catch(error) {
    alert(error.response.data.message);
  }
}

