import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import client from '../api'
import { C } from '../types'
import { useHistory } from 'react-router-dom'

type CPreviewProps = {
  c: C
  handleEdit: (c: C) => void
  handleDelete: (c: C) => void
  handleDetail: (c: C) => void
}

function CPreview({
  c,
  handleEdit,
  handleDelete,
  handleDetail,
}: CPreviewProps) {
  return (
    <>
      {c.c}
      <br />
      <button type='button' onClick={() => handleDetail(c)}>
        detail
      </button>
      <button type='button' onClick={() => handleEdit(c)}>
        edit
      </button>
      <button type='button' onClick={() => handleDelete(c)}>
        delete
      </button>
    </>
  )
}

function ListCs() {
  const history = useHistory()
  const queryClient = useQueryClient() // eslint-disable-line no-unused-vars
  const csQuery = useQuery<C[]>('cs', () => {
    return client
      .get('/api/v1/cs')
      .then((response) => response.data) as Promise<C[]>
  })

  const deleteC = useMutation<any, any, Partial<C>>(
    ({ id }) => {
      return client.delete(`/api/v1/cs/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cs')
      },
    }
  )

  const handleEdit = ({ id }: C) => {
    history.push(`/cs/update/${id}`)
  }

  const handleDelete = ({ id }: C) => {
    deleteC.mutate({ id })
  }

  const handleDetail = ({ id }: C) => {
    history.push(`/cs/detail/${id}`)
  }

  return (
    <>
      <p>{csQuery.data?.length} cs</p>
      <ul>
        {csQuery.data?.map((c) => (
          <li key={c.id}>
            <CPreview
              c={c}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleDetail={handleDetail}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListCs
