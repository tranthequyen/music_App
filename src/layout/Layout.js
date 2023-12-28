import React from 'react';
import AppTopBar from './AppTopBar';
import {AppSideBar} from "@/layout/AppSidebar";

function Layout() {
      return (
            <div className="grid m-0">
                <div className="col-2 ">
                    <AppSideBar />
                </div>
                <div className="col-10">
                  <AppTopBar />
                </div>
            </div>
      );
}

export default Layout;
