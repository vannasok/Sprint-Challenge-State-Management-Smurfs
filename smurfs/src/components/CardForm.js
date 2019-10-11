import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class CardForm extends React.Component {
   state = {
      name: '',
      age: '',
      height: ''
   };
   handleChange = e => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
   };
   addNewSmurf = e => {
      e.preventDefault();
      const newSmurf = this.state;
      this.props.addSmurf(newSmurf);

      this.setState({
         name: '',
         age: '',
         height: ''
      });
   };
   render() {
      return (
         <div className='container'>
            <form onSubmit={this.addNewSmurf}>
               {/* name */}
               <input
                  type='text'
                  name='name'
                  placeholder='Enter Smurf Name..'
                  value={this.state.name}
                  onChange={this.handleChange}
               />
               {/* age */}
               <input
                  type='text'
                  name='age'
                  placeholder='Smurf Age..'
                  value={this.state.age}
                  onChange={this.handleChange}
               />
               {/* height */}
               <input
                  type='text'
                  name='height'
                  placeholder='Smurf Height..'
                  value={this.state.height}
                  onChange={this.handleChange}
               />
               {/* button */}
               <button onClick={this.addNewSmurf}>Add Smurf</button>
            </form>
         </div>
      );
   }
} //close form
const mapStateToProps = state => {
   return {
      addingSmurf: state.addingSmurf
   };
};

export default connect(
   mapStateToProps,
   { addSmurf }
)(CardForm);
