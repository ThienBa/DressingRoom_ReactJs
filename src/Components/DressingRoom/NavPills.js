import React from 'react'
import '../../Assets/Css/style.css'
import Data from '../../Data/Data.json'
import NavPillItem from './NavPillItem'

const renderNavPills = () => {
    return Data.navPills.map((item, index) => {
        const activeNavPill = item.tabName === "tabTopClothes" ? "active" : "";
        return (
            <NavPillItem key={index} activeNavPill={activeNavPill} NavPillItem={item} />
        )
    })
}

export default function NavPills(props) {
  

    return (
        <ul className="nav nav-pills">
            {renderNavPills()}
        </ul>
    )
}
