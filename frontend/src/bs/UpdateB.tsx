import client from '../api'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BForm from './BForm'
import { B } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

function UpdateB() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<B>(['bs', id], () =>
    client.get(`/api/v1/bs/${id}`).then((response) => response.data)
  )

  const updateB = useMutation<B, any, B>(
    (values: B) =>
      client.put(`/api/v1/bs/${id}`, values).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bs')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const b = data as B
  return (
    <BForm
      b={b}
      onSubmit={(values, { setSubmitting }) => {
        updateB.mutate(values)
        setSubmitting?.(false)
        history.push('/bs')
      }}
    />
  )
}

export default UpdateB
