import React, { Component }from 'react';
// import axios from 'axios';


class AppiCallingClassComponent extends Component{
  constructor(props){
    super(props)
      this.state = {
        items:[],
        loading:false,
      }
      this.getName=this.getName.bind(this);
  }
  componentDidMount(){
    this.getName();
  }
    
  getName(){
    fetch("https://randomuser.me/api/?results")
      .then((response) => response.json())
        .then((response) => {
          this.setState({
            items: response.results,
            loading: true,
          })
        })
  }
  render() {
    var {items, loading} = this.state
  if(!loading){
    return(
    <div>Loading...</div>
    )
  }
  else{
return (
    <div className="container">
    {items.map(item => (
      <div >
      <img src={item.picture.large} alt={item.name.first} />
      <br/>
      <h1>{item.name.first} {item.name.last} </h1>
      </div>
    ))}
      <input type= "button" value="click to get name" onClick={this.getName}/>
    </div>
  )
  }
  }
}
export default AppiCallingClassComponent;

