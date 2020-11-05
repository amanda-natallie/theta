export const renderIdade = (anoNascimento: string) => {
  const today = new Date
  const year = today.getFullYear()
  const age = year - parseInt(anoNascimento)
  return age.toString()
}