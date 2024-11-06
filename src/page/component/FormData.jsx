import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import supabase from '../../supabase.js';

const Testaja = () => {
  const [formData, setFormData] = useState({
    nim: '',
    fullname: '',
    addres: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((val) => ({ ...val, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("mahasiswa2").insert([formData]);

    if (error) {
      console.error("Error inserting data:", error);
      return alert("Terjadi kesalahan saat menyimpan data. Silakan coba lagi."); // Menampilkan pesan kesalahan yang lebih informatif
    } else {
      console.info("Create data successful");
      e.target.reset();
      alert("Data berhasil disimpan!"); // Menampilkan umpan balik yang positif
    }
  };

  return (
    <div className='w-full'>
      <Form onFinish={handleSubmit}>
        <Form.Item label="NIM" name="nim" rules={[{ required: true, message: 'NIM wajib diisi!' }]}>
          <Input value={formData.nim} onChange={handleChange} name='nim' />
        </Form.Item>
        <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Nama lengkap wajib diisi!' }]}>
          <Input value={formData.fullname} onChange={handleChange} name='fullname' />
        </Form.Item>
        <Form.Item label="Address" name="addres" rules={[{ required: true, message: 'Alamat wajib diisi!' }]}>
          <Input value={formData.addres} onChange={handleChange} name='addres' />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Nomor telepon wajib diisi!' }]}>
          <Input value={formData.phone} onChange={handleChange} name='phone' />
        </Form.Item>
        <Button htmlType='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default Testaja;
