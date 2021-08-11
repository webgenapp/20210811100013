import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import client from '../api'
import { B } from '../types'
import { useHistory } from 'react-router-dom'

type BPreviewProps = {
  b: B
  handleEdit: (b: B) => void
  handleDelete: (b: B) => void
  handleDetail: (b: B) => void
}

function BPreview({
  b,
  handleEdit,
  handleDelete,
  handleDetail,
}: BPreviewProps) {
  return (
    <>
      {b.b}
      <br />
      <button type='button' onClick={() => handleDetail(b)}>
        detail
      </button>
      <button type='button' onClick={() => handleEdit(b)}>
        edit
      </button>
      <button type='button' onClick={() => handleDelete(b)}>
        delete
      </button>
    </>
  )
}

function ListBs() {
  const history = useHistory()
  const queryClient = useQueryClient() // eslint-disable-line no-unused-vars
  const bsQuery = useQuery<B[]>('bs', () => {
    return client
      .get('/api/v1/bs')
      .then((response) => response.data) as Promise<B[]>
  })

  const deleteB = useMutation<any, any, Partial<B>>(
    ({ id }) => {
      return client.delete(`/api/v1/bs/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bs')
      },
    }
  )

  const handleEdit = ({ id }: B) => {
    history.push(`/bs/update/${id}`)
  }

  const handleDelete = ({ id }: B) => {
    deleteB.mutate({ id })
  }

  const handleDetail = ({ id }: B) => {
    history.push(`/bs/detail/${id}`)
  }

  return (
    <>
      <p>{bsQuery.data?.length} bs</p>
      <ul>
        {bsQuery.data?.map((b) => (
          <li key={b.id}>
            <BPreview
              b={b}
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

export default ListBs
