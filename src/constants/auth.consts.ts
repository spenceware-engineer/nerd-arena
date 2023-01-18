import { FieldInfo } from '../types/auth.types'

export const checkConditions = (conditions: boolean[] | undefined): (boolean | undefined) => {
  return conditions?.reduce((res: boolean, condition: boolean) => (res && condition), true)
}

export const name = 'name'
export const username = 'username'
export const email = 'email'
export const usernameEmail = 'usernameEmail'
export const password = 'password'
export const confirmPassword = 'confirmPassword'
export const clanId = 'clanId'

export const AuthFields: FieldInfo[] = [
  {
    name: 'name',
    title: 'Your Name (Optional)',
    type: 'text',
    placeholder: 'Enter your name...',
    login: false,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  },
  {
    name: 'username',
    title: 'Username (Optional)',
    type: 'text',
    placeholder: 'Choose your username...',
    login: false,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  },
  {
    name: 'email',
    title: 'Email (Required)',
    type: 'email',
    placeholder: 'Enter your email...',
    login: false,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  },
  {
    name: 'usernameEmail',
    title: 'Username or Email (Required)',
    type: 'text',
    placeholder: 'Enter your username or email...',
    login: true,
    signup: false,
    conditions: (): boolean => true
  },
  {
    name: 'password',
    title: 'Password (Required)',
    type: 'password',
    placeholder: 'Enter a password...',
    login: true,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  },
  {
    name: 'confirmPassword',
    title: 'Confirm Password (Required)',
    type: 'password',
    placeholder: 'Re-enter your password...',
    login: false,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  },
  {
    name: 'clanId',
    title: 'Clan ID (Optional)',
    type: 'text',
    placeholder: 'Enter Clan ID...',
    login: false,
    signup: true,
    conditions: (conditions: (boolean[] | undefined)) => checkConditions(conditions)
  }
]

export const ValidationInfo = {
  email: {
    missing: 'Please enter your email. (Ex. your@email.com)',
    invalid: 'Email is Invalid.',
    regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  password: {
    missing: 'Please enter password.',
    short: 'Password must be at least 8 characters long.',
    long: 'Password may not exceed 30 characters.',
    minLength: 8,
    maxLength: 30,
  },
  confirmPassword: {
    missing: 'Please re-enter your password to confirm.',
    invalid: 'Passwords do not match.',
  },
  clanId: {
    length: 12,
    invalidLength: 'Your Clan ID should be 12 characters.',
    invalidChars: 'Your Clan ID should be numbers and letters (NOT case sensetive).',
    append: '\nPlease contact your Clan Leader for your Clan ID.\nYou may choose to do this at a later time in your profile settings.',
    regex: /^[A-Z0-9]{12}$/i,
  },
  name: {
    regex: /^[\w|\s|-]*$/,
    maxLength: 30,
    long: 'Your name may not exceed 30 characters in length.',
    invalid: 'Your name may not contain special characters.',
  },
  username: {
    regex: /^[\w|-]*$/i,
    maxLength: 30,
    long: 'Username may not exceed 30 characters in length.',
    invalid: 'Username may only contain numbers, letters, spaces, _ (underscores), and - (hyphens).',
  },
  usernameEmail: {
    invalid: 'Please enter a valid username or email.'
  }
}
