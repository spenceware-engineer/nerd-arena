export interface FieldInfo {
  name: string
  title: string
  type: string
  placeholder: string
  login: boolean
  signup: boolean
  conditions: (conditions?: boolean[]) => (boolean | undefined)
}

export type FieldName = (
  'email' |
  'password' |
  'clanId' |
  'confirmPassword' |
  'name' |
  'username' |
  'usernameEmail'
)

export interface AuthFormValues {
  [key: string]: string | undefined
}

export interface FieldProps {
  fieldInfo: FieldInfo
  touchedError: string
  show: boolean
}

export type AuthType = 'login' | 'signup'

export interface SwitchAuthProps {
  authType: AuthType
  changeType: () => void
}
