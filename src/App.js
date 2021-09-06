import './App.css';
import React, { Fragment } from 'react';
//import { render } from '@testing-library/react';
import Header from './components/header.js'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', 
  }
}

class App extends React.Component {
  arr = [
    {name: 'Javid', color: 'red', age:18},
    {name: 'Samir', color: 'blue', age:22},
    {name: 'Emin', color: 'pink', age:56}
  ]
  constructor(props) {
    super(props);
    this.state = {
      isView: true,
      name: 'Aida',
      count: 0
    }
    console.log(this.state.name);
    console.log(this.state.isView);
  }

  handleChange = () =>{
    this.setState({
      name: 'samir',
    })
  }

  setCount = () => {
    this.setState({
      count: ++this.state.count,
    })
  }

  render() {
    const {name} = this.state;
    return (
      <div style={(styles.container)}>
        <h1>Title</h1>
        {
          this.arr.map((item, index) => {
            return <Header name={item.name} color={item.color} age={item.age}/>;
          })
        }
        <h1>Name: {this.state.name}</h1>
        <h3>Count: {this.state.count}</h3>
        <button title ='Click' onClick={this.handleChange}>click</button>
        <button title ='Click' onClick={this.setCount}>click</button>
      </div>
    )
  }
}

export default App;
