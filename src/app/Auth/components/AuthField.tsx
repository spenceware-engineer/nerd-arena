import { Field, ErrorMessage } from 'formik'
import { FieldProps } from '../../../types/auth.types'

const AuthField = ({
  fieldInfo,
  touchedError,
  show
}: FieldProps) => {

  return (
    <>
      {(show) ? (
        <>
          <label
            title={fieldInfo.title}
            htmlFor={fieldInfo.name}
          >
            {fieldInfo.title}
          </label>
          <Field
            type={fieldInfo.type}
            name={fieldInfo.name}
            placeholder={fieldInfo.placeholder}
          />
          {touchedError ? (
            <div>{touchedError}</div>
          ) : null}
          <ErrorMessage
            name={fieldInfo.name}
            render={msg => <div>{msg}</div>}
          />
        </>
      ) : null}
    </>
  )
}

export default AuthField
