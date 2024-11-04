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
                    defaultOpenKeys={[1]}
                    items={[
                        {
                            key:'1',
                            icon: "",
                            label : "home page"
                        }
                    ]}
                    >

                    </Menu>
                </div>
            </Sider>
    </Layout>
  )
}

export default LatihaSidebarAntd