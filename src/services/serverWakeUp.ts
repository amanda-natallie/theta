import api from "./api"

export const serverWakeUp = async () => {
    try {
      const response = await api.get(`therapists/username/?username=prileite`)
      return response.data
    } catch(error) {
      alert(error.response.data.message);
    }
  }