import React from 'react'
import "./styles/topbar.scss"
import { Button } from 'primereact/button';
function AppTopBar() {
      return (
            <div className='layout_topbar flex'>
                <Button label="Đăng Nhập" severity="success" rounded />
                <Button label="Đăng Ký" severity="success" rounded />
            </div>
      )
}

export default AppTopBar
