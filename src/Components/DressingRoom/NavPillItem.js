import React from 'react'

export default function NavPillItem(props) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${props.activeNavPill} btn-default`} data-toggle="pill" href={`#${props.NavPillItem.tabName}`}> {props.NavPillItem.showName}</a>
        </li>
    )
}
