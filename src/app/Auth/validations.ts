import { ValidationInfo as vi } from '../../constants/auth.consts'


export const validateEmail = (val: string = ''): (string | undefined) => {
  if (!val) return vi.email.missing
  if (!vi.email.regex.test(val.trim())) return vi.email.invalid
  return undefined
}

export const validatePassword = (val: string = '', login: boolean): (string | undefined) => {
  if (!val) return vi.password.missing
  if (!login && (val.length < vi.password.minLength)) return vi.password.short
  if (!login && (val.length > vi.password.maxLength)) return vi.password.long
  return undefined
}

export const validateConfirmPassword = (val: string = '', comp: string = ''): (string | undefined) => {
  if (!val) return vi.confirmPassword.missing
  if (comp !== val) return vi.confirmPassword.invalid
  return undefined
}

export const validateClanId = (val: string = ''): (string | undefined) => {
  if (val && val.length !== vi.clanId.length) return `${vi.clanId.invalidLength}${vi.clanId.append}`
  if (val && !vi.clanId.regex.test(val.trim())) return `${vi.clanId.invalidChars}${vi.clanId.append}`
  return undefined
}

export const validateName = (val: string = ''): (string | undefined) => {
  if (val && !vi.name.regex.test(val.trim())) return vi.name.invalid
  if (val && val.length > vi.name.maxLength) return vi.name.long
  return undefined
}

export const validateUsername = (val: string = ''): (string | undefined) => {
  if (val && !vi.username.regex.test(val.trim())) return vi.username.invalid
  if (val && val.length > vi.username.maxLength) return vi.username.long
  return undefined
}

export const validateUsernameEmail = (val: string = ''): (string | undefined) => {
  if ((!val) || (val && !vi.username.regex.test(val.trim()) && !vi.email.regex.test(val.trim())))
    return vi.usernameEmail.invalid
  return undefined
}
