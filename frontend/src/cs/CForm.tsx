import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { C } from '../types'

type CreateProps = {
  c?: C
  onSubmit: (values: C, helpers: FormikHelpers<C>) => void
}

function CForm({ c, onSubmit }: CreateProps) {
  const initialValues: C = {
    c: c ? c.c : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='c' placeholder='C' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CForm
