import { Button, Form, Input } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <div className='w-screen h-screen flex justify-center bg-slate-100 items-center flex-col' >
        <div className='w-[600px] h-auto p-10 bg-white shadow-lg  grid gap-6' >
            <h1 className='text-center font-bold' >Register</h1>
            <Form 
            layout='vertical'
            >
                <Form.Item 
                label="Email :"
                name={'email'}
                rules={[
                    {
                        required : true,
                        message : "Email Harus diisi"
                    }
                ]}
                >
                    <Input placeholder='Masukan Email' />
                </Form.Item>
                <Form.Item 
                label="Password"
                name={'password'}
                rules={[
                    {
                        required : true,
                        message : "password Harus diisi"
                    }
                ]}
                >
                    <Input placeholder='Masukan password' />
                </Form.Item>
                <Form.Item 
                label="Repassword"
                name={'Repassword'}
                rules={[
                    {
                        required : true,
                        message : "Repassword Harus diisi"
                    }
                ]}
                >
                    <Input placeholder='Masukan Rep assword' />
                </Form.Item>
                <Button htmlType='submit' type='primary' className='w-full rounded-md ' >Submit</Button>
            </Form>
        </div>
    </div>
  )
}

export default Register