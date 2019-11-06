import React, { Component } from 'react'

export default class customerList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 offset-md-10 col-sm-6 " style={{marginBottom:"10px", marginTop:"10px"}}>
                         <button className="btn btn-primary " > Thêm khách hàng</button>
                    </div>
                </div> 
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Mã số thuế</th>
                        <th scope="col">Loại khách hàng</th>
                        <th scope="col">Lượng sản phẩm đã mua</th>
                        <th scope="col">Cách tiếp cận</th>
                        <th scope="col">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Nhà thuốc Ngọc Hà</th>
                        <td>Điện Biên</td>
                        <td>01234567</td>
                        <td>Tiềm năng</td>
                        <td style={{textAlign:"center"}}>10</td>
                        <td>Trực tiếp</td>
                        <td><button className="btn btn-secondary">Xem chi tiết</button></td>
                    </tr>
                    <tr>
                        <th >Nhà thuốc số 12</th>
                        <td>Hà Nội</td>
                        <td>234567891</td>
                        <td>Trung thành</td>
                        <td style={{textAlign:"center"}}>300</td>
                        <td>Email</td>
                        <td><button className="btn btn-secondary">Xem chi tiết</button></td>
                    </tr>
                    <tr>
                        <th >Nhà thuốc Bích Phương</th>
                        <td>Hải Dương</td>
                        <td>37765432</td>
                        <td>Thường xuyên</td>
                        <td style={{textAlign:"center"}}>82</td>
                        <td>Sale</td>
                        <td><button className="btn btn-secondary">Xem chi tiết</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
