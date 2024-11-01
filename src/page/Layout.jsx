import React from 'react'
import supabase from '../supabase'
import { Button, Space, Table } from 'antd'
import Column from 'antd/es/table/Column'

const Layout = () => {
const {data, error, isLoading, refetch} = useQuery({
  queryKey : ["test"],
  queryFn : async () => {
    const {data, error} = await supabase.from("mahasiswa").select("*")

    if(error) {
      throw error
    }

    console.info(data)
    return data
  }
})

const column = [
  {
      title : "id",
  dataIndex : "id"
},
{
  title : "Nama Mahasiswa",
  dataIndex : "nama"
},
{
  title : "Nim",
  dataIndex : "nim"
},
{
  title : "Jurusan",
  dataIndex : "jurusan"
},
{
  title : "Action",
  render : (e) => {
      return (
          <Space className=''>
              <Button type='primary' htmlType='submit' onClick={() => handleOpenModal(e)} >Edit</Button>
              <Button type='secondary' className='bg-red-500 text-white' onClick={() => handleDelete(e.id)} >Delete</Button>
          </Space>
      )
  }
},
]

  return (
    <div>
      <Table
      columns={column}
      rowKey={'id'}
      dataSource={data}
      className='text-center border'
      />
    </div>
  )
}

export default Layout