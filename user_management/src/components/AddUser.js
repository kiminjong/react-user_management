import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        //dong goi vao mang
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.permission = this.state.permission;
    }
    kiemTratrangthai =()=>{
        if(this.props.hienThiform === true){
            return (
                <div className="col">
                    <div className="card text-white bg-primary mb-3 mt-4">
                        <div className="card-header">Create New Account</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control"  placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event)=>this.isChange(event)} name="phone" className="form-control"  placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" onChange={(event)=>this.isChange(event)} name="permission">
                                        <option value>Choose...</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-warning" onClick={(name,phone,permission)=>this.props.add(this.state.name, this.state.phone, this.state.permission)} value="Sign Up"/>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        
        return (
            <div>
                { this.kiemTratrangthai() }
            </div>
        );
    }
}

export default AddUser;