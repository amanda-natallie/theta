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