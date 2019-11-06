import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
export default class customerManagement extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <Navbar />
                </div>
                <div className="row">
                    <div className="col-2" style={{boxShadow: "2px 1px #888888", position: "fixed", height: "100%"}}>
                        <Sidebar />
                    </div>
                    <div className="col-9">

                    </div>
                </div>
            </div>
        )
    }
}
