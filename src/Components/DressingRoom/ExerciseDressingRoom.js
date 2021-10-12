import React from 'react'
import Model from './Model'
import NavPills from './NavPills'
import TabPanes from './TabPanes'


export default function ExerciseDressingRoom(props) {
    return (
        <div className="container-fluid">
            <h1 className="text-center display-4 text-info">Exercise Dressing Room</h1>
            <div className="row">
                <div className="col-8">
                    <NavPills/>
                    <TabPanes/>
                </div>
                <div className="col-4">
                    <Model/>
                </div>
            </div>
        </div>
    )
}
