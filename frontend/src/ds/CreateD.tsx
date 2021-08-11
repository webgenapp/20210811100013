import client from '../api'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { D, DError } from '../types'
import DForm from './DForm'
import { useHistory } from 'react-router-dom'

function CreateD() {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createD = useMutation<D, DError, D>(
    (values) => {
      return client.post('/api/v1/ds', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ds')
      },
    }
  )

  const handleSubmit = (values: D, { setSubmitting }: FormikHelpers<D>) => {
    createD.mutate(values)
    setSubmitting?.(false)
    history.push('/ds')
  }

  return <DForm onSubmit={handleSubmit} />
}

export default CreateD
