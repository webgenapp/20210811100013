import React from 'react'
import { useParams } from 'react-router-dom'
import client from '../api'
import { useQuery } from 'react-query'
import { C } from '../types'

function DetailC() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<C>(['cs', id], () =>
    client.get(`/api/v1/cs/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const c = data as C

  return (
    <div>
      <label>{c.c}</label>
      <br />
    </div>
  )
}

export default DetailC
