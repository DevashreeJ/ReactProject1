import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
      name: PropTypes.string.isRequired
  };

const defaultProps = {
    name:"Default name"
} 


class MyComponent extends Component {
  componentWillMount(){
    console.log('Will mount');
  }
  componentDidMount(){
    console.log('Did Mount');
  }

  componentWillUpdate(nextProps, nextState)
  {
      console.log(this.props, this.state, nextProps, nextState)
  }

  componentDidUpdate(prevProps, preState)
  {
      console.log(this.props, this.state, prevProps, preState)
  }
  
  render() {
     // const {title, name, onClick} = this.props;

    return (
      <div className="Component">
       <h1>{this.props.title}</h1>
       <h1>{this.props.name}</h1>
       <div onClick ={this.props.onClick} >Click Me.</div>
      </div>
    );
  }
}
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
