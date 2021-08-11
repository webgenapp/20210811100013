import client from '../api'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CForm from './CForm'
import { C } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

function UpdateC() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<C>(['cs', id], () =>
    client.get(`/api/v1/cs/${id}`).then((response) => response.data)
  )

  const updateC = useMutation<C, any, C>(
    (values: C) =>
      client.put(`/api/v1/cs/${id}`, values).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cs')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const c = data as C
  return (
    <CForm
      c={c}
      onSubmit={(values, { setSubmitting }) => {
        updateC.mutate(values)
        setSubmitting?.(false)
        history.push('/cs')
      }}
    />
  )
}

export default UpdateC
