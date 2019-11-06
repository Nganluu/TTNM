import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import CustomerList from './customerList'

export default class customerManagement extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <Navbar />
                </div>
                <div className="row" >
                    <div className="col-2" style={{ boxShadow: "2px 1px #e8e8e8", height: "100%", position: "fixed"}}>
                        <Sidebar />
                    </div>
                    <div className="col-10" style={{marginLeft: "15rem"}}>
                        <CustomerList />
                    </div>
                </div>
            </div>
        )
    }
}
