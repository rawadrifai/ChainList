import React from 'react';
import {form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class FormInput extends React.Component {

    constructor() {
      super();
      this.state = {
        name: '',
        description: '',
        price: 0
      };
    }

    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
      this.setState({ description: e.target.value }); 
    }

    handlePriceChange(e) {
      this.setState({ price: e.target.value }); 
    }
  
    render() {

      return (
        <form>
          <FormGroup
              controlId="formBasicText"
          >
          <br/>
          <ControlLabel>Article Name</ControlLabel>
          <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handleNameChange.bind(this)}
          />
          <br/>
          <ControlLabel>Description</ControlLabel>
          <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handleDescriptionChange.bind(this)}
            />
            <br/>
          <ControlLabel>Price</ControlLabel>
          <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handlePriceChange.bind(this)}
            />
          </FormGroup>

          
        </form>
      );
    }
  }
  
  export default FormInput;