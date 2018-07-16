import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        hienThiform:false,
        data : DataUser,
        searchText:''
      }
  }
  
  doiTrangthai =()=>{
    this.setState({
      hienThiform: !this.state.hienThiform
    });
  }
  getTextSearch =(dl)=>{
    this.setState({
      searchText:dl
    });
    console.log('data nhan duoc la ' + this.state.searchText);
    
  }

  getNewUserData = (name,phone,permission) => {
    var item = {};
    item.id = "";
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    console.log("ok roi");
    console.log(items);
  }

  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item); //tim thay day dl vao ket qua
      }
    })
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm
                checkConnectProps ={(dl)=>this.getTextSearch(dl)}
                ketNoi = {()=>this.doiTrangthai()} 
                hienThiform={this.state.hienThiform}
              />
              <TableData dataUserProps={ketqua}/>
              <AddUser
                add = {(name,phone,permission)=>this.getNewUserData(name,phone,permission)} 
                hienThiform = {this.state.hienThiform}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
