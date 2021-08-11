import client from '../api'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DForm from './DForm'
import { D } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

function UpdateD() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<D>(['ds', id], () =>
    client.get(`/api/v1/ds/${id}`).then((response) => response.data)
  )

  const updateD = useMutation<D, any, D>(
    (values: D) =>
      client.put(`/api/v1/ds/${id}`, values).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ds')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const d = data as D
  return (
    <DForm
      d={d}
      onSubmit={(values, { setSubmitting }) => {
        updateD.mutate(values)
        setSubmitting?.(false)
        history.push('/ds')
      }}
    />
  )
}

export default UpdateD
