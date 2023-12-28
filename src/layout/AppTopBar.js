import React from 'react'
import "./styles/topbar.scss"
import { Button } from 'primereact/button';
function AppTopBar() {
      return (
          <>

              <div className='layout_topbar flex justify-content-end align-items-center gap-3 pr-3 '>
                      <Button  label="Đăng ký"/>
                      <Button  label="Đăng Nhập"/>
              </div>
          </>
      )
}

export default AppTopBar
