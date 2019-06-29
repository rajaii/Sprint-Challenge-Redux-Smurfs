import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { fetchSmurf, postSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

componentDidMount() {
  this.props.fetchSmurf();
}

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.postSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  render() {
    
    return (
      <div className="App">
        <form type='submit' onSubmit={this.handleSubmit}>
            <input 
            type='text'
            placeholder='name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            />
            <input 
            type='text'
            placeholder='age'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
            />
            <input 
            type='text'
            placeholder='height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
            />
            <button>Add Smurf</button>
        </form>


        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>{this.props.smurfs.map(smurf => {
          return (
            <div>
              <h1>{smurf.name}</h1>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          )
        })}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { fetchSmurf, postSmurf })(App);
