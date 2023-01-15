// Render Prop
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateClanId, validateConfirmPassword, validateEmail, validateName, validatePassword, validateUsernameEmail } from './validations'

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

  const validate = (values: any) => {
    const errors: AuthFormErrors = {
      email: validateEmail(values.email),
      password: validatePassword(values.password, login),
      clanId: validateClanId(values.clanId),
      confirmPassword: validateConfirmPassword(values.confirmPassword, values.password),
      username: validateName(values.username),
      name: validateName(values.name),
      usernameEmail: validateUsernameEmail(values.usernameEmail)
    }

    return errors
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
            {
              !login ? (
                <>
                  <label title='Name (Optional)'>
                    <Field type='text' name='name' placeholder='Your Name' />
                    {errors.name && touched.name ? <div>{errors.name}</div> : null}
                    <ErrorMessage name='name' />
                  </label>
                  <label title='Username (Optional)'>
                    <Field type='text' name='username' placeholder='Choose Username' />
                    {errors.username && touched.username ? <div>{errors.username}</div> : null}
                    <ErrorMessage name='username' />
                  </label>
                  <label title='Email*'>
                    <Field type='email' name='email' placeholder='Email' />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <ErrorMessage name='email' />
                  </label>
                </>
              ) : (
                <label title='Username or Email*'>
                    <Field type='text' name='usernameEmail' placeholder='Username or Email' />
                    {errors.usernameEmail && touched.usernameEmail ? <div>{errors.usernameEmail}</div> : null}
                  <ErrorMessage name='usernameEmail' />
                </label>
              )
            }
            <label title='Password*'>
              <Field type='password' name='password' placeholder='Password' />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <ErrorMessage name='password' />
            </label>
            {
              !login ? (
                <>
                  <label title='Confirm Password*'>
                    <Field type='password' name='confirmPassword' placeholder='Re-Enter Password' />
                    {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                    <ErrorMessage name='confirmPassword' />
                  </label>
                  <label title='Clan ID (Optional)'>
                    <Field type='text' name='clanId' placeholder='Enter Clan ID' />
                    {errors.clanId && touched.clanId ? <div>{errors.clanId}</div> : null}
                    <ErrorMessage name='clanId' />
                  </label>
                </>
              ) : null
            }
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div>
        {
          login ? (
            <>Don't have an account? <button onClick={() => { setLogin(false) }}>Sign Up Here!</button></>
          ) : (
            <>Already have an account? <button onClick={() => { setLogin(true) }}>Login Here!</button></>
          )

        }
      </div>
    </div>
  )
}

export default Auth
