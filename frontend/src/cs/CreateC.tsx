import client from '../api'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { C, CError } from '../types'
import CForm from './CForm'
import { useHistory } from 'react-router-dom'

function CreateC() {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createC = useMutation<C, CError, C>(
    (values) => {
      return client.post('/api/v1/cs', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cs')
      },
    }
  )

  const handleSubmit = (values: C, { setSubmitting }: FormikHelpers<C>) => {
    createC.mutate(values)
    setSubmitting?.(false)
    history.push('/cs')
  }

  return <CForm onSubmit={handleSubmit} />
}

export default CreateC
