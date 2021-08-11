import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { B } from '../types'

type CreateProps = {
  b?: B
  onSubmit: (values: B, helpers: FormikHelpers<B>) => void
}

function BForm({ b, onSubmit }: CreateProps) {
  const initialValues: B = {
    b: b ? b.b : '',
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
          <Field type='text' name='b' placeholder='B' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default BForm
