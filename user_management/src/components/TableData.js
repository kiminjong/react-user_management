import React, { Component } from 'react';
import TabledataRows from './TabledataRows';

class TableData extends Component {
    mappingDataUser = ()=>this.props.dataUserProps.map((value,key)=>(
        <TabledataRows
            key={key} 
            Stt={key + 1}
            userName={value.name}
            Phone={value.phone}
            Permission={value.permission}
        />
        ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped  table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>Stt</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Permission</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;