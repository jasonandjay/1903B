import React, {useState} from 'react';
import { IRouteComponentProps } from 'umi';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import MyMenu from '@/components/menu';
const { Header, Sider, Content } = Layout;


const blackList = ['/login', '/403', '/404'];
export default function GloablLayout({ children, location, route, history, match }: IRouteComponentProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  console.log('location...', location);

  if (blackList.indexOf(location.pathname) !== -1) {
    return children
  } else {
    return <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <MyMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: ()=>setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  }
}