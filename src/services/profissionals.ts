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
    throw new Error(error.message)
  }
}
