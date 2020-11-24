import api from "./api";

interface getAllProfessionalsProps {
  day: string;
  month: string;
  year: string;
}

export const getAllProfessionals = async (props: getAllProfessionalsProps) => {
  const { day, month, year } = props;
  const requestBody: any = { date: `${year}-${month}-${day}T08:00` };
  try {
    const providers: any = await api.get("therapists");
    const result = providers.data.map(async (item) => {
      const availability = await api.post(
        `appointments/therapist/${item.id}/available`,
        requestBody
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
    const response = await api.get(`therapists`, config);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const therapistAvailability = async (id: string) => {
  const availability = await api.get(`providers/${id}/day-availability`);
  return availability.data;
};


export const therapistAppointments = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const availability = await api.get(`appointments/therapist`, config);
  return availability.data;
};