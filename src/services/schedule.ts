import api from "./api"



export const getProfessionalSchedule = async () => {
    
    try {
      const response = await api.get(`appointments/therapist?month=11&year=2020`)
      return response.data
    } catch(error) {
      alert(error.response.data.message);
    }
  }