import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tempValue:''
            }
    }
    
    isChange =(event)=>{
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        //this.props.checkConnectProps(this.state.tempValue) //tim ngay lap tuc
    }
    hienThinut =()=>{
        if(this.props.hienThiform === true){
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Close</div>;
        }else{
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Sing Up</div>;
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text"  onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Search" />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                    </div>
                    <div className="col-4 float-right">
                        {this.hienThinut()} 
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;