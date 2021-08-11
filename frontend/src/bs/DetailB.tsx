import React from 'react'
import { useParams } from 'react-router-dom'
import client from '../api'
import { useQuery } from 'react-query'
import { B } from '../types'

function DetailB() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<B>(['bs', id], () =>
    client.get(`/api/v1/bs/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const b = data as B

  return (
    <div>
      <label>{b.b}</label>
      <br />
    </div>
  )
}

export default DetailB
