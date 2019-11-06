import React, { Component } from 'react'

export default class customerList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Mã số thuế</th>
                    <th scope="col">Loại khách hàng</th>
                    <th scope="col">Lượng sản phẩm đã mua</th>
                    <th scope="col">Cách tiếp cận</th>
                    <th scope="col">Lượng sản phẩm đã mua</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
