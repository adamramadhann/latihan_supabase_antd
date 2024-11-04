import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Table, theme, Space } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation dan useNavigate
const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation(); // Dapatkan lokasi saat ini
  const navigate = useNavigate(); // Inisialisasi navigate
  const currentPath = location.pathname; // Ambil path saat ini

  const column = [
    {
      title: "id",
      dataIndex: "id"
    },
    {
      title: "Nama Mahasiswa",
      dataIndex: "nama"
    },
    {
      title: "Nim",
      dataIndex: "nim"
    },
    {
      title: "Jurusan",
      dataIndex: "jurusan"
    },
    {
      title: "Action",
      render: (e) => {
        return (
          <Space>
            <Button type='primary' htmlType='submit' onClick={() => handleOpenModal(e)}>Edit</Button>
            <Button type='secondary' className='bg-red-500 text-white' onClick={() => handleDelete(e.id)}>Delete</Button>
          </Space>
        )
      }
    },
  ];

  // Definisikan item menu
  const menuItems = [
    { key: "/", icon: <UserOutlined />, label: "Nav 1" },
    { key: "/modal", icon: <VideoCameraOutlined />, label: "Nav 2" },
    // Tambahkan item lain jika perlu
  ];

  // Fungsi untuk menangani klik pada item menu
  const handleMenuClick = (e) => {
    navigate(e.key); // Navigasi ke rute yang dipilih
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          className='h-screen pt-10'
          selectedKeys={[currentPath]}
          items={menuItems}
          onClick={handleMenuClick} // Tambahkan penanganan klik di sini
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            margin: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            className='relative -left-5 text-blue-500 '
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content>
          <form action="" className='absolute '>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
          <Table
            columns={column}
            rowKey={'id'}
            className='text-center border'
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
