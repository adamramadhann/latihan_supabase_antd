import { Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

const LatihaSidebarAntd = () => {
  return (
    <Layout>
            <Sider>
                <div className='demo-logo-vertical' >
                    <Menu
                    theme='dark'
                    mode='inline' 
                    className='h-screen'
                    defaultOpenKeys={[curren]}
                    >

                    </Menu>
                </div>
            </Sider>
    </Layout>
  )
}

export default LatihaSidebarAntd