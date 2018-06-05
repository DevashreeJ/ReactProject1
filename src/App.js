import React, { Component } from 'react';
import MyComponent from './MyComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      title : 'Initial Title',
      name : 'Initial Name'
    };
    this.onClick = this.onClick.bind(this)
  }
 

  onClick(){
    this.setState({
    title : 'New title',
    name : 'New name'
   })
  }

  onMouseOver(){
    alert('mouse over')
  }

  onChange(event){
    console.log(event.target.value);
  }

  onSubmit(event){
    event.preventDefault();
   // alert('Submitted');
  }
  
  render() {

    const title = 'This is my first app';
    const list = ['item 1', 'item 2','item 3'] ;

    return (
      <div className="App">
       <h1>{ list.map(item=>{
         return (
           <div key={item} onClick={this.onClick}>{item}</div>
            );
         })
       }
       </h1>
       <MyComponent
        title = {this.state.title}
        name = {this.state.name}
        onClick = {this.onClick}
       />
        
      </div>
    );
  }
}

export default App;
