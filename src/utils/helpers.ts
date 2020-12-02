export const renderIdade = (anoNascimento: string) => {
  const today = new Date
  const year = today.getFullYear()
  const age = year - parseInt(anoNascimento)
  return age.toString()
}

export const renderDate = (date: string) => {
  const receivedDate = new Date(date)
  const convertedDate = new Intl.DateTimeFormat('pt-BR', {year: 'numeric', 
    month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(receivedDate);
  return convertedDate.toString()
}

export const getDateExtend = (date: string) => {
  const receivedDate = new Date(date)
  const convertedDate = new Intl.DateTimeFormat('pt-BR', {year: 'numeric', 
  day: '2-digit', month: 'long'}).format(receivedDate);
  return convertedDate.toString()
}

export const getDateTime = (date: string) => {
  const receivedDate = new Date(date)
  const convertedDate = new Intl.DateTimeFormat('pt-BR', {hour: '2-digit', minute: '2-digit'}).format(receivedDate);
  return convertedDate.toString()
}

export const renderPhone = (phonenumber: string) => {
  const formattedNumber = `+55 (${phonenumber.slice(0, 2)}) ${phonenumber.slice(2, 7)}-${phonenumber.slice(-4)}`
  return formattedNumber
}