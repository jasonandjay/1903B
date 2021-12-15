import React from 'react';
import { Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { SysModelState, ConnectRC, connect, NavLink, useHistory } from 'umi';
import { IMenuList } from '@/interfaces';
// 开启css module
import styles from './index.less';
// 普通引入
// import './index.less';


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
  const history = useHistory();

  let openKeys:string[] = [];
  let subMenu = props.menuList.filter(item=>{
    let index = item.list.findIndex(value=>'/'+value.url===history.location.pathname);
    return index !== -1;
  })
  subMenu.length?openKeys = [String(subMenu[0].menuId)]: null;

  return <div className={styles.wrap}>
    <div className="logo" />
    <Menu mode="inline" key={JSON.stringify(openKeys)} defaultOpenKeys={openKeys} defaultSelectedKeys={[history.location.pathname]}>{
      props.menuList.map((item, index) => {
        return <Menu.SubMenu key={item.menuId} icon={React.createElement(subMenuIcons[index])} title={item.name}>{
          item.list.map(value => {
            return <Menu.Item key={'/'+value.url} icon={<UserOutlined />}>
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
