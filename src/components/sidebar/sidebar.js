import React, { Component } from 'react'
import Sidebar from 'react-sidebar';

export default class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: "1rem" }}>
                    <div style={{ marginBottom: "4rem" }}>
                        <h6>KHÁCH HÀNG</h6>
                        <h7 style={{ color: "gray" }}>Danh sách khách hàng</h7><br />
                        <h7 style={{ color: "gray" }}>Phân loại khách hàng</h7><br />
                        <h7 style={{ color: "gray" }}>Bộ lọc</h7><br />
                    </div>
                    <div style={{ marginBottom: "4rem" }}>
                        <h6>TẠO CHƯƠNG TRÌNH KM</h6>
                        <h7 style={{ color: "gray" }}>Tạo tự động</h7><br />
                        <h7 style={{ color: "gray" }}>Tùy chỉnh chương trình KM</h7><br />
                        <h7 style={{ color: "gray" }}>Tùy chỉnh tự động nhắn tin</h7><br />
                        <h7 style={{ color: "gray" }}>Đồng bộ chương trình KM</h7><br />
                    </div>
                    <div>
                        <h6>GỬI THIỆP CHÚC MỪNG</h6>
                        <h7 style={{ color: "gray" }}>Tạo thiệp chúc mừng</h7><br />
                        <h7 style={{ color: "gray" }}>Thiết lập phương thức gửi</h7><br />
                    </div>
                </div>
            </div>

        )
    }
}
