import {Button, Modal} from 'react-bootstrap';
import React from 'react';
import FormInput from './FormInput';
import getWeb3 from '../utils/getWeb3'

class Input extends React.Component {

    constructor() {
        super();
        this.state = { showModal: false };
    }
  
    close() {
        this.setState({ showModal: false });
    }
  
    open(e) {
        this.setState({ showModal: true });
    }

    submit(e) {

        let web3 = this.state.web3;
        let name = this.refs.formInput.state.name;
        let description = this.refs.formInput.state.description;
        let price = this.refs.formInput.state.price;

        let articlesInstance = this.props.articlesInstance;
        let coinbase = this.props.coinbase;
        articlesInstance.sellArticle(name, description, web3.toWei(price, "ether"), {from: coinbase, gas: 500000});

        this.setState({showModal: false});
    }

    componentWillMount() {
    
        getWeb3
        .then(results => {
          this.setState({web3: results.web3})
        })
        .catch(() => {
          console.log('Error finding web3.')
        })
    }
  
    render() {

      return (
        <div>
              
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open.bind(this)}>

            Sell Article
          </Button>
  
           <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
                <Modal.Title>Sell Article</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormInput ref="formInput"/>
            </Modal.Body>
            
            <Modal.Footer>
                <Button bsStyle="primary" bsSize="large" onClick={this.submit.bind(this)}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default Input;