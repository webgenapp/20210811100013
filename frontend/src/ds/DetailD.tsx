import React from 'react'
import { useParams } from 'react-router-dom'
import client from '../api'
import { useQuery } from 'react-query'
import { D } from '../types'

function DetailD() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<D>(['ds', id], () =>
    client.get(`/api/v1/ds/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const d = data as D

  return (
    <div>
      <label>{d.d}</label>
      <br />
    </div>
  )
}

export default DetailD
