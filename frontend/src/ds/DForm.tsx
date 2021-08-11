import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { D } from '../types'

type CreateProps = {
  d?: D
  onSubmit: (values: D, helpers: FormikHelpers<D>) => void
}

function DForm({ d, onSubmit }: CreateProps) {
  const initialValues: D = {
    d: d ? d.d : '',
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
          <Field type='text' name='d' placeholder='D' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default DForm
