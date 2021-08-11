import client from '../api'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { B, BError } from '../types'
import BForm from './BForm'
import { useHistory } from 'react-router-dom'

function CreateB() {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createB = useMutation<B, BError, B>(
    (values) => {
      return client.post('/api/v1/bs', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bs')
      },
    }
  )

  const handleSubmit = (values: B, { setSubmitting }: FormikHelpers<B>) => {
    createB.mutate(values)
    setSubmitting?.(false)
    history.push('/bs')
  }

  return <BForm onSubmit={handleSubmit} />
}

export default CreateB
