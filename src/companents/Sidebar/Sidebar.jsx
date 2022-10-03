import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { HiLightBulb } from "react-icons/hi";
import { BiTime, BiUser } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiDashboardLine, RiShoppingBasketLine } from 'react-icons/ri';
import { TbCloudDownload, TbUsers, TbMessageDots } from "react-icons/tb";
import logo from "../../assets/Images/logo.svg"
import "./Sidebar.scss"


export default function Sidebar() {
  const [navActive, setNavActive] = useState(1)
  const navItems = [
    { id: 1, name: "Bosh sahifa", path: "/home", icon: RiDashboardLine },
    { id: 2, name: "Monitoring", path: "/monitoring", icon: BsFillFileEarmarkTextFill },
    { id: 3, name: "Xizmatlarni yuklash", path: "/xizmatlarni&yuklash", icon: TbCloudDownload },
    { id: 4, name: "Topshiriqlar", path: "/topshiriqlar", icon: RiShoppingBasketLine },
    { id: 5, name: "Xizmatlar tarixi", path: "/xizmatlar&tarixi", icon: BiTime },
    { id: 6, name: "Mijozlar", path: "/mijozlar", icon: TbUsers },
    { id: 7, name: "Eslatmalar", path: "/eslatmalar", icon: HiLightBulb },
    { id: 8, name: "SMS sozlamalari", path: "/sms&sozlamalari", icon: TbMessageDots },
    { id: 9, name: "Xodimlar", path: "/xodimlar", icon: BiUser },
  ]


  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo-box">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            {navItems.map(item => (
              <Link to={item.path} key={item.id}>
                <li className="sidebar__nav-item" onClick={() => setNavActive(item.id)}>
                  {<item.icon
                    className='sidebar__nav-icon'
                    color={`${navActive === item.id ? "00DEA3" : "333333"}`}
                  />}

                  <p
                    className={`sidebar__nav-name ${navActive === item.id ? "navItemAct" : ""}`}>{item.name} <span></span>
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}