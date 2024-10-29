import { useQuery } from '@tanstack/react-query'
import React from 'react'
import supabase from '../supabase'
import { Button, Table } from 'antd'
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
          <div className=' flex gap-3 '>
              <Button type='primary' htmlType='submit' onClick={() => handleOpenModal(e)} >Edit</Button>
              <Button type='secondary' className='bg-red-500 text-white' onClick={() => handleDelete(e.id)} >Delete</Button>
          </div>
      )
  }
},
]



  return (
    <div>
      <form>
      
      </form>
      {/* {
        data?.map((e) => (
          <h1>{e.id}</h1>
        ))
      } */}
      <Table
      columns={column}
      rowKey={'id'}
      dataSource={data}
      />
    </div>
  )
}

export default Layout