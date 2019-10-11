import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import CardForm from './CardForm';
import { Cards } from './Cards';
import { getSmurfs } from '../actions';

export class App extends Component {
   componentDidMount() {
      this.props.getSmurfs();
   }
   render() {
      if (this.props.fetching) {
         return <p>Loading....</p>;
      }
      return (
         <div className='App'>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <CardForm />
            <Cards smurfs={this.props.smurfs} />
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      smurfs: state.smurf,
      fetchingSmurf: state.fetching
   };
};

export default connect(
   mapStateToProps,
   { getSmurfs }
)(App);
