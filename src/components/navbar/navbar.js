import React, { Component } from 'react'
import {Input} from 'reactstrap'

export default class navbar extends Component {
    render() {
        return (
            <div className="row" 
            style={{boxShadow: "0px 1px #e8e8e8", lineHeight: "3.5rem"}}>
                <div className="col-2" style={{textAlign: "center"}}>
                    Tổng quan
                </div>
                <div className="col-2" style={{textAlign: "center"}}>
                    Marketing
                </div>
                <div className="col-2" style={{textAlign: "center"}}>
                    Quản lý KPI
                </div>
                <div className="col-3">

                </div>
                <div className="col-3" style={{margin: "auto"}}>
                     <Input placeholder="search"/>
                </div>
            </div>
        )
    }
}
