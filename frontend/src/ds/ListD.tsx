import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import client from '../api'
import { D } from '../types'
import { useHistory } from 'react-router-dom'

type DPreviewProps = {
  d: D
  handleEdit: (d: D) => void
  handleDelete: (d: D) => void
  handleDetail: (d: D) => void
}

function DPreview({
  d,
  handleEdit,
  handleDelete,
  handleDetail,
}: DPreviewProps) {
  return (
    <>
      {d.d}
      <br />
      <button type='button' onClick={() => handleDetail(d)}>
        detail
      </button>
      <button type='button' onClick={() => handleEdit(d)}>
        edit
      </button>
      <button type='button' onClick={() => handleDelete(d)}>
        delete
      </button>
    </>
  )
}

function ListDs() {
  const history = useHistory()
  const queryClient = useQueryClient() // eslint-disable-line no-unused-vars
  const dsQuery = useQuery<D[]>('ds', () => {
    return client
      .get('/api/v1/ds')
      .then((response) => response.data) as Promise<D[]>
  })

  const deleteD = useMutation<any, any, Partial<D>>(
    ({ id }) => {
      return client.delete(`/api/v1/ds/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ds')
      },
    }
  )

  const handleEdit = ({ id }: D) => {
    history.push(`/ds/update/${id}`)
  }

  const handleDelete = ({ id }: D) => {
    deleteD.mutate({ id })
  }

  const handleDetail = ({ id }: D) => {
    history.push(`/ds/detail/${id}`)
  }

  return (
    <>
      <p>{dsQuery.data?.length} ds</p>
      <ul>
        {dsQuery.data?.map((d) => (
          <li key={d.id}>
            <DPreview
              d={d}
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

export default ListDs
