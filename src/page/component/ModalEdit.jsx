import { Button, Form, Input, Modal } from 'antd'
import React from 'react'

const ModalEdit = ({ OnClose, onOke, open}) => {
  return (
    <div>
        <Modal onCancel={OnClose} footer={null}  open={open} className=''  >
            <Form className='grid grid-cols-2 relative m-5 gap-5 ' >
              <Form.Item>
                  <Input/>
              </Form.Item>
              <Form.Item>
                  <Input/>
              </Form.Item>
              <Form.Item>
                  <Input/>
              </Form.Item>
              <Form.Item>
                  <Input/>
              </Form.Item>
              <div className='w-full flex justify-end col-span-2 -mt-5 ' >
                <Button type='primary' htmlType='submit' className='w-[]' >Submit</Button>
              </div>
            </Form>
        </Modal>
    </div>
  )
}

export default ModalEdit