import {Menu} from 'primereact/menu';
import {Link} from "react-router-dom";
import "./styles/sidebar.scss"
import logoV2 from '../logoV2.png'
export const AppSideBar = () => {
      let items = [
            {label: 'Trang chủ', icon: 'pi pi-home'},
            {label: 'Tìm kiếm', icon: 'pi pi-fw pi-search'}
      ];
      return (
          <>
                <div className="sidebar ">
                      <img src={ logoV2} style={{width:"220px"}} alt=""/>
                      {items.map(d => {
                            return (
                                <ul className="menu-item">
                                      <li className="p-3 flex gap-3">
                                            <i className={d.icon} ></i>
                                            {d.label}
                                      </li>
                                </ul>
                            )
                      })}
                </div>
            </>
      )
}