import React from 'react'
import api from './api';
import Error from "next/error"

export const userLogin = async (email: string, password: string) => {
  try {
    const response = await api.post('sessions', {email, password})
  localStorage.setItem('authToken', response.data.token)
  localStorage.setItem('userInformation', JSON.stringify(response.data.user))
  window.location.href = response.data.user.typeUser === 'therapist' ? '/perfil-terapeuta' : '/busca-profissionais'
  } catch(error) {
    alert(error.response.data.message);
    window.location.href = '/login'
  }
}

export const userLogout = async () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userInformation')
  window.location.href = '/'
}

interface userDataProps{
  name: string
  lastName: string
  email: string
  email_confirmation: string
  dayBorn: string
  monthBorn: string
  yearBorn: string
  state: string
  city: string
  phone: string
  username: string
  password: string
  password_confirmation: string
}

export const userRegistration = async (userData:userDataProps) => {
  try {
    await api.post('users', {...userData})
    alert("Tudo pronto, agora é só fazer o login e buscar pelo seu terapeuta.")
    window.location.href = '/login'
  } catch(error) {
    console.log(error.response)
    alert(error.response.data.message);
  }
}