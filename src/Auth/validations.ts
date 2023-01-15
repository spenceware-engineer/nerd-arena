const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const clanIdRegex = /^[A-Z0-9]{12}$/i
const nameRegex = /^[\w|\s|-]*$/
const usernameRegex = /^[\w|-]*$/i


export const validateEmail = (val: string): (string | undefined) => {
  if (!val) return 'Please enter your email. (Ex. your@email.com)'
  if (!emailRegex.test(val.trim())) return 'Email is Invalid'
  return undefined
}

export const validatePassword = (val: string, login: boolean): (string | undefined) => {
  if (login && !val) return 'Please enter your password'
  if (!login && !val) return 'Please enter a password'
  if (!login && (val.length < 8)) return 'Password must be at least 8 characters long.'
  if (!login && (val.length > 30)) return 'Password may not exceed 30 characters.'
  return undefined
}

export const validateConfirmPassword = (val: string, comp: string): (string | undefined) => {
  if (!val) return 'Please re-enter your password to confirm.'
  if (comp !== val) return 'Passwords do not match.'
  return undefined
}

export const validateClanId = (val: string): (string | undefined) => {
  const otherwise = '\nPlease contact your Clan Leader for your Clan ID.\nYou may choose to do this at a later time in your profile settings.'
  if (val && val.length !== 12) return `Your Clan ID should be 12 characters.${otherwise}`
  if (val && !clanIdRegex.test(val.trim())) return `Your Clan ID should be numbers and letters (NOT case sensetive).${otherwise}`
  return undefined
}

export const validateName = (val: string): (string | undefined) => {
  if (val && !nameRegex.test(val.trim())) return 'Your name may not contain special characters'
  if (val && val.length > 30) return 'Username may not exceed 30 characters in length.'
  return undefined
}

export const validateUsername = (val: string): (string | undefined) => {
  if (val && !usernameRegex.test(val.trim())) return 'Username may only contain numbers, letters, spaces, _ (underscores), and - (hyphens).'
  if (val && val.length > 30) return 'Username may not exceed 30 characters in length.'
  return undefined
}


export const validateUsernameEmail = (val: string): (string | undefined) => {
  if ((!val) || (val && !usernameRegex.test(val.trim()) && !emailRegex.test(val.trim())))
    return 'Please enter a valid username or email.'
  return undefined
}
