import React, { useEffect, useState } from 'react'
import supabase from '../../supabase'
import { Table } from 'antd'
import ModalEdit from '../component/ModalEdit'

const HomePage =  () => {

    const [data , setData] = useState([])
    const [openModal, setOpenModal] = useState(false)



    const handleOpenModal = () => setOpenModal(prev => !prev)
    const handleClose = () => setOpenModal(prev => !prev)




    const colums = [
        {
            title : "NO",
            dataIndex : "id"
        },
        {
            title : "Nama Mahasiswa",
            dataIndex : "nama"
        },
        {
            title : "Jurusan",
            dataIndex : "jurusan"
        },
        {
            title : "Nim",
            dataIndex : "nim"
        },
    ]


    useEffect(() => {
        const fetchSupabase = async () => {
            const {data, error} = await supabase.from("mahasiswa").select("*")

            if(error) {
            console.error(error)
        } else {
            setData(data)
        }

    }

    fetchSupabase()
}, [])

  return (
    <div>
        <button onClick={handleOpenModal}  >Create Data</button>
        <ModalEdit 
        OnClose={handleClose} 
        open={openModal}  
        />


        <Table
        columns={colums}
        dataSource={data}
        rowKey={"id"}
        />
        
    </div>
  )
}

export default HomePage