import formConstants from "../utils/constant/formConstants";
import api from "./api";

interface getAllProfessionalsProps {
  day: string;
  month: string;
  year: string;
}
export const userRegistration = async (userData: formConstants.ITherapist) => {
  await api
    .post("users", { ...userData })
    .then(() => {
      alert("Verifique seu e-mail para confirmar sua conta.");
      window.location.href = "/login";
    })
    .catch((error: any) => {
      console.log(error.response);
      alert(error.response.data.message);
    });
};

export const getAllProfessionals = async (props: getAllProfessionalsProps) => {
  const { day, month, year } = props;
  const requestBody: any = { date: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(-2)}T08:00` };
  try {
    const providers: any = await api.get("therapists");
    const result = providers.data.map(async (item) => {
      const availability = await api.post(
        `appointments/therapist/${item.id}/available`, requestBody
      );
      return { ...item, availability: availability.data };
    });
    return Promise.all(result);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getProssionalInfo = async (username: string) => {
  const config = { params: { username } };
  try {
    const response = await api.get(`therapists/username/`, config);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const therapistAvailability = async (id: string, dateBody?: any) => {
  if(dateBody){
    const { day, month, year } = dateBody;
    const requestBody: any = { date: `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(-2)}T08:00` };
    console.log(requestBody)
    const availability = await api.post(
      `appointments/therapist/${id}/available`, requestBody
    );
    return availability.data;
  } else {
    const availability = await api.post(
      `appointments/therapist/${id}/available`
    );
    return availability.data;
  }
  
  

  
};

export const therapistAppointments = async (id: string) => {
  try {
    const response = await api.get(`/appointments/therapist/${id}`,);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const therapistPastAppointments = async (id: string) => {
  try {
    const response = await api.get(`/appointments/past/${id}`,);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};