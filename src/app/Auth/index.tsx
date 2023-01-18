// Render Prop
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateClanId, validateConfirmPassword, validateEmail, validateName, validatePassword, validateUsernameEmail } from './validations'
import {
  AuthFields,
  email,
  password,
  clanId,
  confirmPassword,
  username,
  name,
  usernameEmail
} from '../../constants/auth.consts'
import { AuthFormValues } from '../../types/auth.types'
import AuthField from './AuthField'

interface AuthFormErrors {
  clanId?: string
  confirmPassword?: string
  email?: string
  name?: string
  password?: string
  username?: string
  usernameEmail?: string
}

const Auth = () => {
  const [ login, setLogin ] = useState<boolean>(true)
  const initialValues = { email: '', password: '', clanId: '', confirmPassword: '', name: '', username: '', usernameEmail: '' }

  const validate = (values: AuthFormValues) => {
    const errors: AuthFormErrors = {
      email: validateEmail(values[ email ]),
      password: validatePassword(values[ password ], login),
      clanId: validateClanId(values[ clanId ]),
      confirmPassword: validateConfirmPassword(values[ confirmPassword ], values[ password ]),
      username: validateName(values[ username ]),
      name: validateName(values[ name ]),
      usernameEmail: validateUsernameEmail(values[ usernameEmail ])
    }

    return errors
  }

  return (
    <div>
      <button onClick={() => setLogin(true)}>Log In</button>
      <button onClick={() => setLogin(false)}>Sign Up</button>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {AuthFields.map((field) => (
              <AuthField
                fieldInfo={field}
                touchedError={errors[ email ] && touched[ email ] ? errors[ email ] : ''}
                show={(login && field.login) || (!login && field.signup)}
              />
            ))}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Auth
