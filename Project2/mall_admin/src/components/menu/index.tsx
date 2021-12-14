import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { SysModelState, ConnectRC, connect, NavLink } from 'umi';
import { IMenuList } from '@/interfaces';

interface IProps {
  menuList: IMenuList[]
}

const subMenuIcons = [
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
]
const MyMenu: ConnectRC<IProps> = props => {
  return <div>
    <div className="logo" />
    <Menu mode="inline" defaultSelectedKeys={['1']}>{
      props.menuList.map((item, index) => {
        return <Menu.SubMenu key={item.menuId} icon={React.createElement(subMenuIcons[index])} title={item.name}>{
          item.list.map(value => {
            return <Menu.Item key={value.menuId} icon={<UserOutlined />}>
              <NavLink to={'/'+value.url}>
                {value.name}
              </NavLink>
            </Menu.Item>
          })
        }</Menu.SubMenu>
      })
    }
    </Menu>
  </div>
}

const mapStateToProps = ({ sys }: { sys: SysModelState }) => {
  return {
    menuList: sys.menuList
  }
}

export default connect(mapStateToProps)(MyMenu);
