import React, { Component } from 'react';

class TabledataRows extends Component {
    PermissionShow = () =>{
        if(this.props.Permission ===1){
            return "Amin";
        }else if(this.props.Permission ===2){
            return "Modrator";
        }else{
            return "Normal User";
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.Stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.Phone}</td>
                <td>{this.PermissionShow()}</td>
                <td>
                    <div className="btn btn-group">
                    <div className="btn btn-warning">Edit</div>
                    <div className="btn btn-danger">Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TabledataRows;